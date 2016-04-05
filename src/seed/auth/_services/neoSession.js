define(['seed/auth/module', 'angular', 'moment'], function (module, angular, moment) {
	'use strict';

	/**
	 * Session management service
	 * @class neoSession
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $q {Object} Angular promise provider
	 * @param $rootScope {Object} Angular global scope helper
	 * @param neoCookie {seed.auth.neoCookie}
	 * @param neoRequestHeaders {seed.auth.neoRequestHeaders}
	 * @param UserAPI {seed.auth.UserAPI}
	 * @param PermissionStore {permission.PermissionStore}
	 */
	function neoSession($log, $q, $rootScope, neoCookie, neoRequestHeaders, UserAPI, PermissionStore) {

		$log = $log.getInstance('seed.auth.neoSession');
		$log.debug('Initiated service');

		var self = this;

		this.setSession = setSession;
		this.clearSession = clearSession;
		this.checkSession = checkSession;

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 * @returns {promise}
		 */
		function setSession(user, customer) {
			if (!angular.isDefined(user)) {
				throw new ReferenceError('Parameter "user" must be defined');
			}

			if (!angular.isDefined(customer)) {
				throw new ReferenceError('Parameter "customer" must be defined');
			}

			try {
				setAccessRights(customer);
				setCookieObjects(user, customer);
				setTimezone(user);
				setGlobalObjects(user, customer);
				setRequestHeaders(user, customer);

				$log.debug('Set new user session');
				return $q.resolve();

			} catch (err) {
				$log.error('Error setting up user session', err);
				return $q.reject(err);
			}
		}

		/**
		 * @method
		 *
		 * @returns {promise}
		 */
		function clearSession() {
			try {
				clearCookieObject();
				clearAccessRights();
				clearGlobalObject();
				clearRequestHeaders();

				$log.debug('Cleared user session');
				return $q.resolve();

			} catch (err) {
				$log.error('Error clearing user session', err);
				return $q.reject(err);
			}
		}

		/**
		 * @method
		 *
		 * @returns {promise}
		 */
		function checkSession() {
			var token = neoCookie.getToken();
			var customerId = neoCookie.getCustomer();

			if (!(hasSetTokenAndCustomer(token, customerId))) {
				$log.debug('User does not have stored in cookie either "token" or "activeCustomer"');

				return $q.reject();
			}

			neoRequestHeaders.setAuthToken(token);

			return UserAPI
				.authInfo()
				.then(function (user) {
					$log.debug('Successfully checked if user user session is still valid');

					var customer = _.findWhere(user.customers, {customerId: customerId});
					return self.setSession(user, customer);
				})
				.catch(function (e) {
					$log.error('Error while checking user session', e);

					return self.clearSession()
						.finally(function () {
							return $q.reject(e);
						});

				});
		}

		/**
		 * @method
		 * @private
		 *
		 * @param token {String}
		 * @param customerId {String}
		 *
		 * @returns {Boolean}
		 */
		function hasSetTokenAndCustomer(token, customerId) {
			return !!(token && customerId);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param customer {seed.auth.Customer}
		 */
		function setAccessRights(customer) {
			PermissionStore.defineManyPermissions(
				customer.featureKeys,
				function (stateParams, roleName) {
					return customer.$hasPermission(roleName);
				});

			$log.debug('Set access rights');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setCookieObjects(user, customer) {
			neoCookie.setCustomer(customer.customerId);
			neoCookie.setToken(user.$metadata.token);

			$log.debug('Set cookie properties');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 */
		function setTimezone(user) {
			if (user.timezone) {
				moment.tz.setDefault(user.timezone);

				$log.debug('Set timezone');
			}
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setGlobalObjects(user, customer) {
			$rootScope.user = user;
			$rootScope.customer = customer;

			$log.debug('Set customer and user objects available globally');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setRequestHeaders(user, customer) {
			neoRequestHeaders.setCustomerId(customer.customerId);
			neoRequestHeaders.setAuthToken(user.$metadata.token);

			$log.debug('Set request headers');
		}

		/**
		 * @method
		 * @private
		 */
		function clearCookieObject() {
			neoCookie.removeToken();
			neoCookie.removeCustomer();

			$log.debug('Removed cookie token and active customer');
		}

		/**
		 * @method
		 * @private
		 */
		function clearAccessRights() {
			PermissionStore.clearStore();

			$log.debug('Cleared access rights');
		}

		/**
		 * @method
		 * @private
		 */
		function clearGlobalObject() {
			delete $rootScope.user;
			delete $rootScope.customer;

			$log.debug('Removed global objects');
		}

		/**
		 * @method
		 * @private
		 */
		function clearRequestHeaders() {
			neoRequestHeaders.clearHeaders();

			$log.debug('Cleared request headers');
		}
	}

	module.service('neoSession', neoSession);
});
