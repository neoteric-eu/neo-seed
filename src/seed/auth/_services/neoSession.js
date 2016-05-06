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
	 * @param neoPermission {seed.auth.neoPermission}
	 * @param authConf {seed.auth.authConf}
	 */
	function neoSession($log, $q, $rootScope,
											neoCookie, neoPermission, neoRequestHeaders,
											authConf, UserAPI) {

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

				$rootScope.$broadcast(authConf.neoSession.events.setSession);

				$log.debug('Set up new user session');
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
			clearCookieObject();
			clearAccessRights();
			clearGlobalObject();
			clearRequestHeaders();

			$rootScope.$broadcast(authConf.neoSession.events.clearSession);

			$log.debug('Cleared user session');
			return $q.resolve();
		}

		function hasSetTokenAndCustomerInGlobals() {
			return !!($rootScope.user && $rootScope.customer);
		}

		/**
		 * @method
		 *
		 * @returns {promise}
		 */
		function checkSession() {

			var token = neoCookie.getToken();
			var customerId = neoCookie.getCustomer();

			if (!(hasSetTokenAndCustomerInCookies(token, customerId))) {
				$log.debug('Not found stored in cookie "token" and "activeCustomer"');

				return $q.reject();
			}


			if (!hasSetTokenAndCustomerInGlobals()) {
				$log.debug('Not found globally defined "token" and "activeCustomer"');

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

						return self
							.clearSession()
							.finally(function () {
								return $q.reject(e);
							});
					});
			}

			return $q.resolve();
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
		function hasSetTokenAndCustomerInCookies(token, customerId) {
			return !!(token && customerId);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param customer {seed.auth.Customer}
		 */
		function setAccessRights(customer) {
			var permissionNames = customer.featureKeys;
			var rolesNames = _.map(customer.roles, function (role) {
				return role.roleName;
			});

			neoPermission.setPermissions(permissionNames);
			neoPermission.setRoles(rolesNames);

			$log.debug('Set access rights');
		}

		/**
		 * @method
		 * @private
		 */
		function clearAccessRights() {
			neoPermission.clear();

			$log.debug('Cleared access rights');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setCookieObjects(user, customer) {
			var customerId = customer.customerId;
			var token = user.$metadata.token;

			neoCookie.setCustomer(customerId);
			neoCookie.setToken(token);

			$log.debug('Set cookie properties');
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
		 */
		function clearGlobalObject() {
			$rootScope.user = undefined;
			$rootScope.customer = undefined;

			$log.debug('Removed global objects');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setRequestHeaders(user, customer) {
			var customerId = customer.customerId;
			var token = user.$metadata.token;

			neoRequestHeaders.setCustomerId(customerId);
			neoRequestHeaders.setAuthToken(token);

			$log.debug('Set request headers');
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
