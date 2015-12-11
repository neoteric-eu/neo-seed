define([
	'seed/auth/module',
	'moment'
], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.helpers.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $window {Object} Window service
	 * @param $cookies {Function} Cookie service
	 * @param Language {Object} Model factory
	 * @param neoRequestHeaders {Object} Header manipulation service
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param $rootScope {Object} Global scope provider
	 * @param appConf {Object} Application configuration
	 * @param gettextCatalog {Object} translation catalog provider
	 * @param amMoment {Object} Moment configuration provider
	 * @return {Function} Instantiated service
	 */
	var LanguageAPI = function ($log, $window, $cookies, $rootScope, Language, neoRequestHeaders, BaseAPI,
															gettextCatalog, amMoment, appConf) {

		$log = $log.getInstance('seed.auth.LanguageAPI');
		$log.debug('Initiated service');

		var api = new BaseAPI(Language);

		api.languageCollection = [];

		/**
		 * Initiate the collection of the languages and set application language.
		 */
		api.init = function () {
			api.languageCollection = Language
				.$collection()
				.$build(appConf.languageSettings.languageCollection);

			$log.debug('Set up application language collection');

			var cookieLang = $cookies.getObject('lang');

			if (_.isObject(cookieLang)) {
				api.setLanguage(cookieLang);
				$log.debug('Set up application language from cookie');
				return;
			}

			var browserLang = $window.navigator.language || $window.navigator.userLanguage || $window.navigator.systemLanguage;

			if (_.some(api.languageCollection, {localeISO: browserLang})) {
				api.setLanguage(_.find(api.languageCollection, {localeISO: browserLang}));
				$log.debug('Set up application language from browser preferences');
				return;
			}

			api.setLanguage(appConf.languageSettings.defaultLanguage);
			$log.debug('Set up application language from defaults');
		};

		/**
		 * Set application interface language
		 * @param language {seed.auth.Language} Language instance
		 */
		api.setLanguage = function (language) {

			api.languageCollection.$setSelected(language);

			// Write locale to cookie
			$cookies.putObject('lang', language);
			// Update headers
			neoRequestHeaders.setAcceptLanguage(language.localeISO);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.locale);
			amMoment.changeLocale(language.localeISO);

			$rootScope.$broadcast('seed.languageAPI.setLanguage', language);

			$log.debug('Set application language to: ' + language.locale);
		};

		/**
		 * Get application interface language
		 * @return {seed.auth.Language} Language instance
		 */
		api.getLanguage = function () {
			return api.languageCollection.$selected;
		};

		return api;
	};

	module.service('LanguageAPI', LanguageAPI);
});


