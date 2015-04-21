define(['auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param setDefaultsHeaders
	 * @param Permission
	 * @param localStorageService
	 * @return {session}
	 */
	var session = function (setDefaultsHeaders, Permission, localStorageService) {
		/**
		 * @description
		 * Setup user session: cookie, http headers, current customer,
		 * features and logged status.
		 * @method setSession
		 * @param {string} customer
		 * @param {string} token
		 */
		this.setSession = function (customer, token) {
			localStorageService.set('activeProfile', customer);

			setDefaultsHeaders.setCustomerId(customer.customerId);
			setDefaultsHeaders.setAuthToken(token);

			Permission.setFeatures(customer.featureKeys);
		};

		return this;
	};

	module.registerService('session', session);
});
