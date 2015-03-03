define(['auth/module', 'globalSettings'], function (module, globalSettings) {
	'use strict';

	/**
	 * @constructor* @return
	 * @method session
	 * @param {} $q
	 * @param {} ipCookie
	 * @param UserAPI
	 * @param {} setDefaultsHeaders
	 * @param {} Permission
	 */
	var session = function ($q, ipCookie, UserAPI, setDefaultsHeaders,
													Permission) {
		var self = this;

		/**
		 * @description
		 * Setup user session: cookie, http headers, current customer,
		 * features and logged status.
		 * @method setSession
		 * @param {string} customer
		 * @param {string} token
		 */
		this.setSession = function (customer, token) {
			if (customer) {
				ipCookie('customerId', customer.customerId, globalSettings.get('cookieOptions'));
				setDefaultsHeaders.setCustomerId(customer.customerId);
				Permission.setFeatures(customer.featureKeys);
			}

			ipCookie('token', token, angular.copy(globalSettings.get('cookieOptions')));
			setDefaultsHeaders.setAuthToken(token);

		};

		/**
		 * @name clearSession
		 * @description Clear the user session
		 * @method clearSession
		 */
		this.clearSession = function () {

			setDefaultsHeaders.clearHeaders();
			Permission.clearFeautres();

			ipCookie.remove('token');
			ipCookie.remove('customerId');
		};

		/**
		 * Description
		 * @method checkSession MemberExpression
		 */
		this.checkSession = function () {
			var dfd = $q.defer();

			var token, customerId;
			token = ipCookie('token');
			customerId = ipCookie('customerId');

			if (token) {
				setDefaultsHeaders.setAuthToken(token);

				UserAPI
					.authInfo()
					.then(function (user) {
						self.setSession(_.first(user.customers) || customerId, token);
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

	module.registerService('session', session);
});
