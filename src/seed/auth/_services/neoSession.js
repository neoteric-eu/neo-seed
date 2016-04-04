define(['seed/auth/module', 'moment', 'moment-timezone'], function (module, moment) {
	'use strict';

	/**
	 * @param $log {Object} Logging service
	 * @param neoCookie {seed.auth.neoCookie} Cookie service
	 * @param PermissionStore {Object} ACL service
	 * @param $q {Object} Angular promise provider
	 * @param neoRequestHeaders {Object} Request decorator
	 * @param UserAPI {Object} Interface for REST communication with server
	 * @param $rootScope {Object} Angular global scope helper
	 */
	var neoSession = function ($log, neoCookie, PermissionStore, $q, $rootScope, neoRequestHeaders, UserAPI) {

		$log = $log.getInstance('seed.auth.neoSession');
		$log.debug('Initiated service');

		this.setSession = setSession;
		this.clearSession = clearSession;
		this.checkSession = checkSession;

		function setSession(user, customer) {
			var dfd = $q.defer();

			try {
				PermissionStore.defineManyPermissions(
					customer.featureKeys,
					function (stateParams, roleName) {
						return customer.$hasPermission(roleName);
					});
				$log.debug('Set access rights');

				neoCookie.setCustomer(customer.customerId);
				neoCookie.setToken(user.$metadata.token);
				$log.debug('Set cookie objects');

				$log.debug('Set timezone');
				if (user.timezone) {
					moment.tz.setDefault(user.timezone);
				}

				$rootScope.user = user;
				$rootScope.customer = customer;
				$log.debug('Set customer and user objects available globally');

				neoRequestHeaders.setCustomerId(customer.customerId);
				neoRequestHeaders.setAuthToken(user.$metadata.token);

				$log.debug('Set new user session');
				dfd.resolve();

			} catch (e) {
				$log.error('Error setting up user session', e);
				dfd.reject(e);
			}

			return dfd.promise;
		}

		function clearSession() {
			var dfd = $q.defer();

			try {
				neoCookie.removeToken();
				neoCookie.removeCustomer();
				$log.debug('Removed cookie objects');

				PermissionStore.clearStore();
				$log.debug('Cleared access rights');

				$rootScope.user = undefined;
				$rootScope.customer = undefined;
				$log.debug('Removed global objects');

				neoRequestHeaders.clearHeaders();
				dfd.resolve();

			} catch (e) {
				$log.error('Error clearing user session', e);
				dfd.reject(e);
			}

			$log.debug('Cleared user session');
			return dfd.promise;
		}

		function checkSession() {
			var dfd = $q.defer(),
				self = this,
				token = neoCookie.getToken(),
				activeCustomer = neoCookie.getCustomer();

			if (token && activeCustomer) {
				neoRequestHeaders.setAuthToken(token);

				UserAPI
					.authInfo()
					.then(function (user) {
						// When reload page set session again
						if (!($rootScope.user && $rootScope.customer)) {
							var customer = _.findWhere(user.customers, {customerId: activeCustomer});
							self.setSession(user, customer)
								.then(function () {
									dfd.resolve();
								});
						} else {
							// Or pass it
							dfd.resolve();
						}

						$log.debug('Successfully checked if user user session is still valid');

					})
					.catch(function (e) {
						self
							.clearSession()
							.finally(function () {
								dfd.reject(e);
							});

						$log.error('Error while checking user session', e);
					});
			} else {
				$log.debug('User does not have set in cookie either token or activeCustomer');

				dfd.reject();
			}

			return dfd.promise;
		}
	};

	module.service('neoSession', neoSession);
});
