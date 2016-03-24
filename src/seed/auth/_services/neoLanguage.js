define(['seed/auth/module'], function (module) {
	'use strict';

	function neoLanguage($log, $rootScope, $cookies, $window,
											 gettextCatalog, amMoment,
											 appConf, LanguageAPI, neoRequestHeaders) {

		$log = $log.getInstance('app.auth.neoLanguage');
		$log.debug('Initiated service');

		var availableLanguagesCollection;
		var activeLanguage;

		this.init = init;
		this.getLanguageByLocale = getLanguageByLocale;
		this.isLanguageAvailable = isLanguageAvailable;
		this.getActiveLanguage = getActiveLanguage;
		this.setActiveLanguage = setActiveLanguage;

		/**
		 * Initiates available language collection and set application language.
		 */
		function init() {
			availableLanguagesCollection = LanguageAPI
				.collection()
				.$decode(appConf.languageSettings.languageCollection);

			var cookieLang = $cookies.getObject('lang');

			if (isLanguageAvailable(cookieLang)) {
				var lang = getLanguageByLocale(cookieLang);
				setActiveLanguage(lang);

				$log.debug('Set up application with language from cookies');
				return;
			}

			var browserLang = detectBrowserLanguage();

			if (isLanguageAvailable(browserLang)) {
				var lang = getLanguageByLocale(browserLang);
				setActiveLanguage(lang);

				$log.debug('Set up application with language from browser preferences');
				return;
			}

			setActiveLanguage(appConf.languageSettings.defaultLanguage);

			$log.debug('Set up application with language from default settings');
		}

		/**
		 * Retrieve browser language
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
		 *
		 * @param locale {String}
		 * @returns {boolean}
		 */
		function isLanguageAvailable(locale) {
			return _.some(availableLanguagesCollection, function (language) {
				return language.locale === locale ||
					language.localePOSIX === locale ||
					language.code === locale;
			});
		}

		/**
		 * Set application interface language
		 *
		 * @param language {seed.auth.Language}
		 */
		function setActiveLanguage(language) {
			if (!isLanguageAvailable(language.locale)) {
				throw new ReferenceError('Could not find language in list of available ones');
			}

			activeLanguage = language;

			// Write locale to cookie
			$cookies.putObject('lang', activeLanguage);
			// Update headers
			neoRequestHeaders.setAcceptLanguage(language.locale);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.localePOSIX);
			amMoment.changeLocale(language.locale, null);

			$rootScope.$broadcast('seed.auth.neoLanguage::setActiveLanguage', language);

			$log.debug('Set application language to: ' + language.localePOSIX);
		}

		/**
		 * Get application interface language
		 *
		 * @return {seed.auth.Language}
		 */
		function getActiveLanguage() {
			return activeLanguage;
		}

		/**
		 * Get Language by it's POSIX locale name
		 *
		 * @param locale {String} locale string
		 * @returns {seed.auth.Language}
		 */
		function getLanguageByLocale(locale) {
			return _.find(availableLanguagesCollection, function (language) {
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

