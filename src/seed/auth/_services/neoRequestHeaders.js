define(['lodash', 'seed/auth/module'], function (_, module) {
	'use strict';

	/**
	 * Expands every HTTP request by additional headers
	 * @class neoRequestHeaders
	 * @memberOf seed.auth
	 *
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 * @param $log {Object} Logging service
	 */
	function neoRequestHeaders($log, $http) {
		$log = $log.getInstance('seed.auth.neoRequestHeaders');
		$log.debug('Initiated service');

		this.setAuthToken = setAuthToken;
		this.setCustomerId = setCustomerId;
		this.setAcceptLanguage = setAcceptLanguage;
		this.setAppCode = setAppCode; // this is stupidity to write code like this, my manifest by cojack
		this.clearHeaders = clearHeaders;

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param token {String}
		 */
		function setAuthToken(token) {
			if (_.isEmpty(token)) {
				throw new ReferenceError('Token in Authorization header must not be empty');
			}

			$http.defaults.headers.common['Authorization'] = 'token ' + token;

			$log.debug('Set Authorization header ', token);
		}

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param customerId {String}
		 */
		function setCustomerId(customerId) {
			if (_.isEmpty(customerId)) {
				throw new ReferenceError('CustomerId in X-Customer header must not be empty');
			}

			$http.defaults.headers.common['X-Customer-Id'] = customerId;

			$log.debug('Set X-Customer-Id header');
		}

		/**
		 * @method
		 *
		 * @param locale {String}
		 *
		 * Accept-Language value is set based on:
		 * @see https://en.wikipedia.org/wiki/Content_negotiation
		 * @see https://en.wikipedia.org/wiki/IETF_language_tag
		 * @see http://tools.ietf.org/html/rfc7231#section-5.3
		 */
		function setAcceptLanguage(locale) {
			if (_.isEmpty(locale)) {
				throw new Error('Language in AcceptLanguage header must not be empty');
			}

			$http.defaults.headers.common['Accept-Language'] = locale;

			$log.debug('Set Accept-Language header');
		}

		/**
		 *
		 */
		function clearHeaders() {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
			delete $http.defaults.headers.common['Accept-Language'];
			delete $http.defaults.headers.common['X-App-Code'];

			$log.debug('Cleared headers');
		}

		/**
		 *
		 * @param appCode {string}
		 */
		function setAppCode(appCode) {
			appCode = appCode || false;

			if (!appCode || _.startsWith('__', appCode)) {
				return $log.warn('AppCode header is empty');
			}

			$http.defaults.headers.common['X-App-Code'] = appCode;

			$log.debug('Set X-App-Code header', appCode);
		}
	}

	module.service('neoRequestHeaders', neoRequestHeaders);
});

