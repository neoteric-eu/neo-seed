define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @class CustomerAPI
	 * @param Customer
	 * @param neoSession
	 * @param Permission
	 * @param BaseAPI
	 * @param ipCookie
	 * @return {*}
	 */
	var CustomerAPI = function (Customer, BaseAPI, neoSession, Permission, ipCookie) {

		var api = new BaseAPI(Customer);

		api.setSelected = function (customer) {
			Customer.$setSelected(customer);

			neoSession.setSession(customer, ipCookie('token'));
			Permission.setFeatures(customer.featureKeys);
		};

		return api;
	};

	module.service('CustomerAPI', CustomerAPI);
});


