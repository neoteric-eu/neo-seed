define([
	'seed/auth/module',
	'moment'
], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param Language  {Object} Model factory
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param $rootScope {Object} Global scope provider
	 * @param appConf {Object} Application configuration
	 * @param gettextCatalog {Object} translation catalog provider
	 * @param amMoment {Object} Moment configuration provider
	 * @return {Function} Instantiated service
	 */
	var LanguageAPI = function ($log, $cookies, $rootScope, Language, BaseAPI,
															gettextCatalog, amMoment, appConf) {

		$log = $log.getInstance('seed.auth.LanguageAPI');
		$log.debug('Initiated service');

		var api = new BaseAPI(Language);

		this.languageCollection = [];

		/**
		 * Initiate the collection of the languages
		 * and assign them to $rootScope.
		 */
		api.init = function () {
			var self = this;
			Language
				.$collection()
				.$build(appConf.languageSettings.languageCollection)
				.$reveal()
				.$asPromise()
				.then(function (collection) {
					self.languageCollection = collection;
					var language = $cookies.getObject('lang');
					if (!_.isObject(language)) {
						language = appConf.languageSettings.defaultLanguage;
					}
					self.setLanguage(language);
				});

			$log.debug('Set up application language collection');
		};

		/**
		 * Set application interface language
		 * @param language {seed.auth.Language} Language instance
		 */
		api.setLanguage = function (language) {

			api.languageCollection.$setSelected(language);

			// Write locale to cookie
			$cookies.putObject('lang', language);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.locale);
			amMoment.changeLocale(language.locale);

			$rootScope.$broadcast('seed.languageAPI.setLanguage', language);

			$log.debug('Set application language to: ' + language.locale);
		};

		/**
		 * Get application interface language
		 * @return {seed.auth.Language} Language instance
		 */
		api.getLanguage = function () {
			return this.languageCollection.$selected || $cookies.getObject('lang');
		};

		return api;
	};

	module.service('LanguageAPI', LanguageAPI);
});


