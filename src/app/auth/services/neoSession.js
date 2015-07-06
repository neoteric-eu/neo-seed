define(['auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param Permission
	 * @param ipCookie
	 * @param $q
	 * @param neoRequestHeaders
	 * @param UserAPI
	 * @param $rootScope
	 */
	var neoSession = function (Permission, ipCookie, $q, $rootScope, neoRequestHeaders, UserAPI) {

		/**
		 *
		 * @param customer
		 * @param token
		 */
		this.setSession = function (customer, token) {
			if (customer) {
				Permission.setFeatures(customer.featureKeys);

				ipCookie('activeCustomer', customer.customerId);
				neoRequestHeaders.setCustomerId(customer.customerId);
			}

			ipCookie('token', token);
			neoRequestHeaders.setAuthToken(token);
		};

		/**
		 *
		 */
		this.clearSession = function () {
			neoRequestHeaders.clearHeaders();
			Permission.clearFeautres();

			ipCookie.remove('token');
			ipCookie.remove('activeCustomer');
		};

		/**
		 *
		 * @returns {promise|Function|*|deferred.promise|{then, catch, finally}|IPromise<T>}
		 */
		this.checkSession = function () {
			var dfd = $q.defer(),
				self = this,
				token = ipCookie('token');

			if (token) {
				neoRequestHeaders.setAuthToken(token);

				UserAPI
					.authInfo()
					.then(function () {
						self.setSession(_.findWhere($rootScope.user.customers, {customerId: ipCookie('activeCustomer')}), token);
						dfd.resolve();
					})
					.catch(function (reason) {
						dfd.reject(reason);
						self.clearSession();
					});
			} else {
				self.clearSession();
				dfd.reject();
			}

			return dfd.promise;
		};
	};

	module.registerService('neoSession', neoSession);
});
