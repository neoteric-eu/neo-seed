define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param Permission {Object} ACL service
	 * @param $q {Object} Angular promise provider
	 * @param neoRequestHeaders {Object} Request decorator
	 * @param UserAPI {Object} Interface for REST communication with server
	 * @param $rootScope {Object} Angular global scope helper
	 */
	var neoSession = function ($log, $cookies, Permission, $q, $rootScope,
		neoRequestHeaders, UserAPI) {

		$log = $log.getInstance('seed.auth.neoSession');
		$log.debug('Initiated service');

		this.setSession = function (user, customer) {
			Permission.defineManyRoles(
				customer.featureKeys,
				function (stateParams, roleName) {
					return _.where(customer, roleName);
				});

			$cookies.putObject('activeCustomer', customer.customerId);

			neoRequestHeaders.setCustomerId(customer.customerId);

			$log.debug('Set user object available globally');
			$rootScope.user = user;
			$log.debug('Set customer object available globally');
			$rootScope.customer = customer;

			$cookies.putObject('token', user.$metadata.token);
			neoRequestHeaders.setAuthToken(user.$metadata.token);

			$log.debug('Set new user session');
		};

		this.clearSession = function () {
			neoRequestHeaders.clearHeaders();
			$rootScope.user = undefined;

			$cookies.remove('token');
			$cookies.remove('activeCustomer');

			$log.debug('Cleared user session');
		};

		this.checkSession = function () {
			var dfd = $q.defer(),
				self = this,
				token = $cookies.getObject('token'),
				activeCustomer = $cookies.getObject('activeCustomer');

			if (token && activeCustomer) {
				neoRequestHeaders.setAuthToken(token);

				UserAPI
					.authInfo()
					.then(function () {
						if (!($rootScope.user && $rootScope.customer)) {
							self.setSession($rootScope.user, $rootScope.customer);
						}
						dfd.resolve();

						$log.debug('Successfully checked if user user session is still valid');

					})
					.catch(function (reason) {
						self.clearSession();
						dfd.reject(reason);

						$log.error('Error while checking user session');
					});
			} else {
				$log.debug('User does not have set in cookie either token or activeCustomer');

				dfd.reject();
			}

			return dfd.promise;
		};
	};

	module.service('neoSession', neoSession);
});
