define(['auth/module', 'globalSettings'], function (module, globalSettings) {
	'use strict';

	/**
	 *
	 * @param $q
	 * @param ipCookie
	 * @param UserAPI
	 * @param setDefaultsHeaders
	 * @param Permission
	 */
	var session = function ($q, ipCookie, UserAPI, setDefaultsHeaders, Permission) {
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

		return this;
	};

	module.registerService('session', session);
});
