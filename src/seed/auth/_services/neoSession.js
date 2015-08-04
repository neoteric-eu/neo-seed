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

		this.setSession = function (customer, token) {
			if (customer) {
				Permission.defineManyRoles(
					customer.featureKeys,
					function (stateParams, roleName) {
						return _.where(customer, roleName);
					});

				$cookies.putObject('activeCustomer', customer.customerId);
				neoRequestHeaders.setCustomerId(customer.customerId);
			}

			$cookies.putObject('token', token);
			neoRequestHeaders.setAuthToken(token);

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
						self.setSession(_.findWhere($rootScope.user.customers, {customerId: activeCustomer}), token);
						dfd.resolve();
					})
					.catch(function (reason) {
						dfd.reject(reason);
						self.clearSession();

						$log.error('Error while checking user session');
					});
			} else {
				$log.debug('User does not have set in cookie either token or activeCustomer');

				dfd.reject();
			}

			$log.debug('Checked if user user session is still valid');

			return dfd.promise;
		};
	};

	module.service('neoSession', neoSession);
});
