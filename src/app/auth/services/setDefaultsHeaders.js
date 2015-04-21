define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description* @method setDefaultsHeaders
	 * @param {} $http
	 */
	var setDefaultsHeaders = function ($http) {
		/**
		 * Description
		 * @method setAuthToken
		 * @param {} token
		 */
		this.setAuthToken = function (token) {
			$http.defaults.headers.common['Authorization'] = 'token ' + token;
		};

		/**
		 * Description
		 * @method setCustomerId
		 * @param {} customerId
		 */
		this.setCustomerId = function (customerId) {
			$http.defaults.headers.common['X-Customer-Id'] = customerId;
		};

		/**
		 * Description
		 * @method clearHeaders
		 */
		this.clearHeaders = function () {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
		};
	};

	module.registerService('setDefaultsHeaders', setDefaultsHeaders);
});
