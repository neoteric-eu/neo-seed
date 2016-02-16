define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param Customer {Object} Model factory
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @return {Function} Instantiated service
	 */
	var CustomerAPI = function ($log, $cookies, Customer, BaseAPI) {

		$log = $log.getInstance('seed.auth.CustomerAPI');

		$log.debug('Initiated service');

		var api = new BaseAPI(Customer);

		/**
		 * Selects customer for a user session
		 * @param customer {seed.auth.Customer}
		 */
		api.setSelected = function (customer) {
			Customer.$setSelected(customer);

			$log.debug('Selected active customer: ' + customer.customerId);
		};

		return api;
	};

	module.service('CustomerAPI', CustomerAPI);
});


