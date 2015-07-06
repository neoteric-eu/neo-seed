define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Expands every HTTP request by additional headers
	 * @class neoRequestHeaders
	 * @memberOf app.auth
	 *
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 */
	var neoRequestHeaders = function ($http) {

		this.setAuthToken = function (token) {
			$http.defaults.headers.common['Authorization'] = 'token ' + token;
		};

		this.setCustomerId = function (customerId) {
			$http.defaults.headers.common['X-Customer-Id'] = customerId;
		};

		this.clearHeaders = function () {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
		};
	};

	module.service('neoRequestHeaders', neoRequestHeaders);
});
