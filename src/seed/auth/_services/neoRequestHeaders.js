define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Expands every HTTP request by additional headers
	 * @class neoRequestHeaders
	 * @memberOf app.auth
	 *
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 */
	var neoRequestHeaders = function ($log, $http) {
		$log = $log.getInstance('app.auth.neoRequestHeaders');

		this.setAuthToken = function (token) {
			$http.defaults.headers.common['Authorization'] = 'token ' + token;
			$log.debug('Set auth token header');
		};

		this.setCustomerId = function (customerId) {
			$http.defaults.headers.common['X-Customer-Id'] = customerId;
			$log.debug('Set customer token header');
		};

		this.clearHeaders = function () {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];

			$log.debug('Cleared header');
		};
	};

	module.service('neoRequestHeaders', neoRequestHeaders);
});
