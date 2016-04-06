define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating cookies data
	 *
	 * @class neoCookie
	 * @memberOf seed.auth
	 */
	function neoCookie($log, $cookies) {

		$log = $log.getInstance('seed.auth.neoCookie');
		$log.debug('Initiated service');

		var self = this;

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

		this.clearCookie = clearCookie;

		/**
		 * @method
		 *
		 * @returns {String} Active customer ID
		 */
		function getCustomer() {
			$log.debug('Fetched "activeCustomer" value from cookie');

			removeCookieValueIfObject('activeCustomer');
			return $cookies.get('activeCustomer');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param customerId {String} Active customer ID
		 */
		function setCustomer(customerId) {
			if (!_.isString(customerId)) {
				throw new TypeError('Parameter "customerId" must be String');
			}

			$cookies.put('activeCustomer', customerId);

			$log.debug('Updated "activeCustomer" value in cookie to ' + customerId);
		}

		/**
		 * @method
		 */
		function removeCustomer() {
			$cookies.remove('activeCustomer');

			$log.debug('Removed "activeCustomer" from cookie');
		}

		/**
		 * @method
		 *
		 * @returns {String} Session token
		 */
		function getToken() {
			$log.debug('Fetched "token" value from cookie');

			removeCookieValueIfObject('token');
			return $cookies.get('token');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param token {String} Session token
		 */
		function setToken(token) {
			if (!_.isString(token)) {
				throw new TypeError('Parameter "token" must be String');
			}

			$cookies.put('token', token);

			$log.debug('Updated "token" value in cookie to ' + token);
		}

		/**
		 * @method
		 */
		function removeToken() {
			$cookies.remove('token');

			$log.debug('Removed "token" from cookie');
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
		 * @throws {TypeError}
		 *
		 * @param locale {String} locale code
		 */
		function setLanguage(locale) {
			if (!_.isString(locale)) {
				throw new TypeError('Parameter "locale" must be String');
			}

			$cookies.put('lang', locale);

			$log.debug('Updated "lang" value in cookie');
		}

		/**
		 * @method
		 */
		function removeLanguage() {
			$cookies.remove('lang');

			$log.debug('Removed "lang" from cookie');
		}

		/**
		 * @method
		 *
		 * @returns {Boolean} locale code
		 */
		function getCookieConsent() {
			$log.debug('Fetched "cookieConsent" value from cookie');

			return $cookies.getObject('cookieConsent');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param cookieConsent {Boolean} Is cookie consent accepted
		 */
		function setCookieConsent(cookieConsent) {
			if (!_.isBoolean(cookieConsent)) {
				throw new TypeError('Parameter "cookieConsent" must be Boolean');
			}

			$cookies.putObject('cookieConsent', cookieConsent);

			$log.debug('Updated "cookieConsent" value in cookie');
		}

		/**
		 * @method
		 */
		function removeCookieConsent() {
			$cookies.remove('cookieConsent');

			$log.debug('Removed "cookieConsent" from cookie');
		}

		/**
		 * @method
		 */
		function clearCookie() {
			self.removeCookieConsent();
			self.removeCustomer();
			self.removeLanguage();
			self.removeToken();

			$log.debug('Cleared cookie');
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

				$log.debug('Removed object-like "' + key + '" value from cookie');
			}
		}

	}

	module.service('neoCookie', neoCookie);
});

