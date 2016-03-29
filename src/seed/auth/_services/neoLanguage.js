define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating language changes
	 *
	 * @class neoLanguage
	 * @memberOf seed.auth
	 */
	function neoLanguage($log, $rootScope, $cookies, $window,
											 availableLanguages, activeLanguage,
											 gettextCatalog, amMoment,
											 LanguageAPI, appConf, neoRequestHeaders) {

		$log = $log.getInstance('app.auth.neoLanguage');
		$log.debug('Initiated service');

		var defaultLanguage;

		this.init = init;
		this.getLanguageByLocale = getLanguageByLocale;
		this.isLanguageAvailable = isLanguageAvailable;
		this.setActiveLanguage = setActiveLanguage;

		/**
		 * Initiates available language collection and select initial language
		 * @method
		 */
		function init() {
			try {
				_.assign(availableLanguages, LanguageAPI
					.collection()
					.$decode(appConf.languageSettings.languageCollection));
				$log.debug('Initiated available languages collection');
			} catch (err) {
				throw new ReferenceError('Malformed "availableLanguages" collection');
			}

			defaultLanguage = LanguageAPI.build(appConf.languageSettings.defaultLanguage);
			$log.debug('Initiated default language');

			var cookieLang = detectCookieLanguage();

			if (isLanguageAvailable(cookieLang)) {
				var cookieLanguageObject = getLanguageByLocale(cookieLang);
				setActiveLanguage(cookieLanguageObject);

				$log.debug('Set up container with language from cookies');
				return;
			}

			var browserLang = detectBrowserLanguage();

			if (isLanguageAvailable(browserLang)) {
				var browserLanguageObject = getLanguageByLocale(browserLang);
				setActiveLanguage(browserLanguageObject);

				$log.debug('Set up container with language from browser preferences');
				return;
			}

			setActiveLanguage(defaultLanguage);
			$log.debug('Set up container with language from default settings');
		}

		/**
		 * Retrieve language from cookie
		 * @method
		 * @private
		 *
		 * @returns {*} cookie locale string
		 */
		function detectCookieLanguage() {
			try {
				var cookieLang = $cookies.get('lang');

				// Duck-typing based detection if string is serialized JSON object
				if (cookieLang.indexOf('{') >= 0) {
					$cookies.remove('lang');
					return;
				}

				return cookieLang;
			} catch (err) {
				$cookies.remove('lang');
			}
		}

		/**
		 * Retrieve language from brwser preferences
		 * @method
		 * @private
		 *
		 * @returns {string} browser locale string
		 */
		function detectBrowserLanguage() {
			return $window.navigator.language ||
				$window.navigator.userLanguage ||
				$window.navigator.systemLanguage;
		}

		/**
		 * Finds if language is defined in language collection by locale
		 * @method
		 * @param locale {String}
		 *
		 * @returns {boolean}
		 */
		function isLanguageAvailable(locale) {
			return _.some(availableLanguages, function (language) {
				return language.locale === locale ||
					language.localePOSIX === locale ||
					language.code === locale;
			});
		}

		/**
		 * Set application interface language
		 * @method
		 *
		 * @param language {seed.auth.Language}
		 */
		function setActiveLanguage(language) {
			if (_.isUndefined(language.locale) && !isLanguageAvailable(language.locale)) {
				throw new ReferenceError('Trying to set language to not available one');
			}

			_.assign(activeLanguage, language);

			// Write locale to cookie
			$cookies.put('lang', activeLanguage.locale);
			// Update headers
			neoRequestHeaders.setAcceptLanguage(language.locale);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.localePOSIX);
			amMoment.changeLocale(language.locale, null);

			$rootScope.$broadcast('seed.auth.neoLanguage::setActiveLanguage', language);

			$log.debug('Set application language to: ' + language.localePOSIX);
		}

		/**
		 * Find language by it's locale name
		 * @method
		 *
		 * @param locale {String} locale string
		 * @returns {seed.auth.Language}
		 */
		function getLanguageByLocale(locale) {
			return _.find(availableLanguages, function (language) {
				if (language.locale === locale ||
					language.localePOSIX === locale ||
					language.code === locale) {
					return language;
				}
			});
		}
	}

	module.service('neoLanguage', neoLanguage);
});

