define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Expands every HTTP request by additional headers
	 * @class neoRequestHeaders
	 * @memberOf seed.auth
	 *
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 * @param $log
	 */
	var neoRequestHeaders = function ($log, $http) {
		$log = $log.getInstance('app.auth.neoRequestHeaders');
		$log.debug('Initiated service');

		this.setAuthToken = function (token) {
			$http.defaults.headers.common['Authorization'] = 'token ' + token;

			$log.debug('Set Authorization header ', token);
		};

		this.setCustomerId = function (customerId) {
			$http.defaults.headers.common['X-Customer-Id'] = customerId;

			$log.debug('Set X-Customer-Id header');
		};

		this.setAcceptLanguage = function (language) {
			$http.defaults.headers.common['Accept-Language'] = language;

			$log.debug('Set Accept-Language header');
		};

		this.clearHeaders = function () {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
			delete $http.defaults.headers.common['Accept-Language'];

			$log.debug('Cleared headers');
		};
	};

	module.service('neoRequestHeaders', neoRequestHeaders);
});

