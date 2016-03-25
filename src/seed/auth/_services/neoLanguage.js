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
			_.extend(availableLanguages, LanguageAPI
				.collection()
				.$decode(appConf.languageSettings.languageCollection));
			$log.debug('Initiated available languages collection');

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
		 * @returns {string} cookie locale string
		 */
		function detectCookieLanguage() {
			try {
				var cookieLang = $cookies.get('lang');

				// Duck-typing based detection if string is serialized JSON object
				if (cookieLang.indexOf('{')) {
					$cookies.remove('lang');
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
			if (_.isEmpty(locale)) {
				return false;
			}

			try {
				return _.some(availableLanguages, function (language) {
					return language.locale === locale ||
						language.localePOSIX === locale ||
						language.code === locale;
				});
			} catch (err) {
				throw new ReferenceError('Malformed "availableLanguages" collection');
			}
		}

		/**
		 * Set application interface language
		 * @method
		 *
		 * @param language {seed.auth.Language}
		 */
		function setActiveLanguage(language) {
			if (!isLanguageAvailable(language.locale)) {
				language = defaultLanguage;
			}

			_.extend(activeLanguage, language);

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
			try {
				return _.find(availableLanguages, function (language) {
					if (language.locale === locale ||
						language.localePOSIX === locale ||
						language.code === locale) {
						return language;
					}
				});
			} catch (err) {
				throw new ReferenceError('Malformed "availableLanguages" collection');
			}
		}
	}

	module.service('neoLanguage', neoLanguage);
});

