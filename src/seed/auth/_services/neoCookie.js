define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating cookies data
	 *
	 * @class neoCookie
	 * @memberOf seed.auth
	 */
	function neoCookie($log, $cookies) {

		$log = $log.getInstance('app.auth.neoCookie');
		$log.debug('Initiated service');

		this.getCustomer = getCustomer;
		this.setCustomer = setCustomer;
		this.removeCustomer = removeCustomer;

		this.getToken = getToken;
		this.setToken = setToken;
		this.removeToken = removeToken;

		this.getLanguage = getLanguage;
		this.setLanguage = setLanguage;
		this.removeLanguage = removeLanguage;

		this.getCookieConsent = getCookieConsent;
		this.setCookieConsent = setCookieConsent;
		this.removeCookieConsent = removeCookieConsent;

		/**
		 * @method
		 *
		 * @returns {String} Active customer ID
		 */
		function getCustomer() {
			removeCookieValueIfObject('activeCustomer');
			return $cookies.get('activeCustomer');
		}

		/**
		 * @method
		 *
		 * @param customerId {String} Active customer ID
		 */
		function setCustomer(customerId) {
			if (!_.isString(customerId)) {
				throw new TypeError('Parameter "customerId" must be String');
			}

			$cookies.put('activeCustomer', customerId);
		}

		/**
		 * @method
		 */
		function removeCustomer() {
			$cookies.remove('activeCustomer');
		}

		/**
		 * @method
		 *
		 * @returns {String} Session token
		 */
		function getToken() {
			removeCookieValueIfObject('token');
			return $cookies.get('token');
		}

		/**
		 * @method
		 *
		 * @param token {String} Session token
		 */
		function setToken(token) {
			if (!_.isString(token)) {
				throw new TypeError('Parameter "token" must be String');
			}

			$cookies.put('token', token);
		}

		/**
		 * @method
		 */
		function removeToken() {
			$cookies.remove('token');
		}

		/**
		 * @method
		 *
		 * @returns {String} locale code
		 */
		function getLanguage() {
			removeCookieValueIfObject('lang');
			return $cookies.get('lang');
		}

		/**
		 * @method
		 *
		 * @param locale {String} locale code
		 */
		function setLanguage(locale) {
			if (!_.isString(locale)) {
				throw new TypeError('Parameter "locale" must be String');
			}

			$cookies.put('lang', locale);
		}

		/**
		 * @method
		 */
		function removeLanguage() {
			$cookies.remove('lang');
		}

		/**
		 * @method
		 *
		 * @returns {Boolean} locale code
		 */
		function getCookieConsent() {
			return $cookies.getObject('cookieConsent');
		}

		/**
		 * @method
		 *
		 * @param cookieConsent {Boolean} Is cookie consent accepted
		 */
		function setCookieConsent(cookieConsent) {
			if (!_.isBoolean(cookieConsent)) {
				throw new TypeError('Parameter "cookieConsent" must be Boolean');
			}

			$cookies.putObject('cookieConsent', cookieConsent);
		}

		/**
		 * @method
		 */
		function removeCookieConsent() {
			$cookies.remove('cookieConsent');
		}

		/**
		 * @method
		 * @private
		 *
		 * This method should be deprecated as soon as possible
		 *
		 * @param key {String} Cookie key to test
		 */
		function removeCookieValueIfObject(key) {
			var cookieValue = $cookies.get(key);

			// Duck-typing based detection if string is serialized JSON object or object-like string
			if (cookieValue && (cookieValue.indexOf('{') >= 0 || cookieValue.indexOf('"') >= 0)) {
				$cookies.remove(key);
			}
		}

	}

	module.service('neoCookie', neoCookie);
});

