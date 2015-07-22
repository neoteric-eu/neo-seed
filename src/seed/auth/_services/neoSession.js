define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param $log {Object} Logging service
	 * @param Permission
	 * @param ipCookie
	 * @param $q
	 * @param neoRequestHeaders
	 * @param UserAPI
	 * @param $rootScope
	 */
	var neoSession = function ($log, Permission, ipCookie,
		$q, $rootScope, neoRequestHeaders, UserAPI) {
		$log = $log.getInstance('seed.auth.neoSession');

		this.setSession = function (customer, token) {
			if (customer) {
				Permission.setFeatures(customer.featureKeys);

				ipCookie('activeCustomer', customer.customerId);
				neoRequestHeaders.setCustomerId(customer.customerId);
			}

			ipCookie('token', token);
			neoRequestHeaders.setAuthToken(token);

			$log.debug('Set new user session');
		};

		this.clearSession = function () {
			neoRequestHeaders.clearHeaders();
			Permission.clearFeautres();
			$rootScope.user = undefined;

			ipCookie.remove('token');
			ipCookie.remove('activeCustomer');

			$log.debug('Cleared user session');
		};

		this.checkSession = function () {
			var dfd = $q.defer(),
				self = this,
				token = ipCookie('token'),
				activeCustomer = ipCookie('activeCustomer');

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
