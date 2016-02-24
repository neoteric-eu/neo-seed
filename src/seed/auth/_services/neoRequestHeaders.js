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

		this.setAuthToken = setAuthToken;
		this.setCustomerId = setCustomerId;
		this.setAcceptLanguage = setAcceptLanguage;
		this.clearHeaders = clearHeaders;

		function setAuthToken(token) {
			if (_.isEmpty(token)) {
				throw new Error('Token in Authorization header must not be empty');
			}

			$http.defaults.headers.common['Authorization'] = 'token ' + token;

			$log.debug('Set Authorization header ', token);
		}

		function setCustomerId(customerId) {
			if (_.isEmpty(customerId)) {
				throw new Error('CustomerId in X-Customer header must not be empty');
			}

			$http.defaults.headers.common['X-Customer-Id'] = customerId;

			$log.debug('Set X-Customer-Id header');
		}

		/**
		 * Accept-Language value is set based on:
		 * @see https://en.wikipedia.org/wiki/Content_negotiation
		 * @see https://en.wikipedia.org/wiki/IETF_language_tag
		 * @see http://tools.ietf.org/html/rfc7231#section-5.3
		 */
		function setAcceptLanguage(language) {
			if (_.isEmpty(language)) {
				throw new Error('Language in AcceptLanguage header must not be empty');
			}

			$http.defaults.headers.common['Accept-Language'] = language;

			$log.debug('Set Accept-Language header');
		}

		function clearHeaders() {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
			delete $http.defaults.headers.common['Accept-Language'];

			$log.debug('Cleared headers');
		}
	};

	module.service('neoRequestHeaders', neoRequestHeaders);
});

