define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating language changes
	 *
	 * @class neoLanguage
	 * @memberOf seed.auth
	 *
	 * @param $log
	 * @param $rootScope
	 * @param $window
	 * @param availableLanguages
	 * @param activeLanguage
	 * @param defaultLanguage
	 * @param gettextCatalog
	 * @param amMoment
	 * @param authConf {seed.auth.authConf}
	 * @param neoCookie {seed.auth.neoCookie}
	 * @param LanguageAPI
	 * @param appConf
	 * @param neoRequestHeaders {seed.auth.neoRequestHeaders}
	 */
	function neoLanguage($log, $rootScope, $window,
											 availableLanguages, activeLanguage, defaultLanguage,
											 gettextCatalog, amMoment, authConf,
											 neoCookie, neoRequestHeaders, LanguageAPI, appConf) {

		$log = $log.getInstance('seed.auth.neoLanguage');
		$log.debug('Initiated service');

		this.init = init;
		this.getLanguageByLocale = getLanguageByLocale;
		this.isLanguageAvailable = isLanguageAvailable;
		this.setActiveLanguage = setActiveLanguage;

		/**
		 * Initiates available language collection and select initial language
		 * @method
		 */
		function init() {

			initAvailableLanguagesCollection();
			initDefaultLanguage();

			var cookieLang = neoCookie.getLanguage();

			if (isLanguageAvailable(cookieLang)) {
				setActiveLanguageFromCookie(cookieLang);
				return;
			}

			var browserLang = detectBrowserLanguage();

			if (isLanguageAvailable(browserLang)) {
				setActiveLanguageFromBrowser(browserLang);
				return;
			}

			setActiveLanguage(defaultLanguage);
			$log.debug('Set up container with language from default settings');
		}

		/**
		 * Initialize availableLanguages collection based on provided config
		 * @method
		 * @private
		 *
		 * @throws {ReferenceError}
		 */
		function initAvailableLanguagesCollection() {
			try {
				_.assign(availableLanguages, LanguageAPI
					.collection()
					.$decode(appConf.languageSettings.languageCollection));
				$log.debug('Initiated available languages collection');
			} catch (err) {
				throw new ReferenceError('Malformed "availableLanguages" collection');
			}
		}


		/**
		 * Builds defaultLanguage object based on provided config
		 * @method
		 * @private
		 */
		function initDefaultLanguage() {
			defaultLanguage = LanguageAPI.build(appConf.languageSettings.defaultLanguage);
			$log.debug('Initiated default language');
		}

		/**
		 * Set activeLanguage based on cookie stored locale
		 * @method
		 * @private
		 *
		 * @param cookieLang {String} Cookie locale string
		 */
		function setActiveLanguageFromCookie(cookieLang) {
			var cookieLanguageObject = getLanguageByLocale(cookieLang);
			setActiveLanguage(cookieLanguageObject);

			$log.debug('Set up container with language from cookies');
		}

		/**
		 * Retrieve language from brwser preferences
		 * @method
		 * @private
		 *
		 * @returns {string} Browser locale string
		 */
		function detectBrowserLanguage() {
			return $window.navigator.language ||
				$window.navigator.userLanguage ||
				$window.navigator.systemLanguage;
		}


		/**
		 * Set activeLanguage based on browser locale
		 * @method
		 * @private
		 *
		 * @param browserLang {String} Browser locale string
		 */
		function setActiveLanguageFromBrowser(browserLang) {
			var browserLanguageObject = getLanguageByLocale(browserLang);
			setActiveLanguage(browserLanguageObject);

			$log.debug('Set up container with language from browser preferences');
		}

		/**
		 * Finds if language is defined in language collection by locale
		 * @method
		 *
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
		 * @throws {ReferenceError}
		 *
		 * @param language {seed.auth.Language}
		 */
		function setActiveLanguage(language) {
			if (_.isUndefined(language.locale) && !isLanguageAvailable(language.locale)) {
				throw new ReferenceError('Trying to set language to not available one');
			}

			_.assign(activeLanguage, language);

			// Write locale to cookie
			neoCookie.setLanguage(activeLanguage.locale);
			neoRequestHeaders.setAcceptLanguage(language.locale);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.localePOSIX);
			amMoment.changeLocale(language.locale);

			$rootScope.$broadcast(authConf.neoLanguage.events.setActiveLanguage, language);

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

