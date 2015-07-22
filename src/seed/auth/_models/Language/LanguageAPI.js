define([
	'seed/auth/module',
	'moment'
], function (module, moment) {
	'use strict';

	/**
	 *
	 * @param Language
	 * @param $rootScope
	 * @param ipCookie
	 * @param gettextCatalog
	 * @param amMoment
	 * @param appConf
	 * @constructor
	 */
	var LanguageAPI = function (Language, $rootScope, ipCookie,
		gettextCatalog, amMoment, appConf) {

		this.languageCollection = [];

		/**
		 * Initiate the collection of the languages
		 * and assign them to $rootScope.
		 * @method initiate
		 */
		this.initiate = function () {
			var self = this;
			Language
				.$collection()
				.$build(appConf.languageSettings.languages)
				.$reveal()
				.$asPromise()
				.then(function (data) {
					self.languageCollection = data;
					self.setLanguage(ipCookie('lang') || appConf.languageSettings.defaultLanguage);
				});
		};

		/**
		 * Description
		 * @method setLanguage
		 * @param language
		 */
		this.setLanguage = function (language) {

			if (_.isString(language)) {
				language = this.languageCollection.$findByCode(language);
			}

			this.languageCollection.$setSelected(language);

			// Write locale to cookie
			ipCookie('lang', language.code);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.locale);
			amMoment.changeLocale(language.locale);
			moment.locale(language.locale);
		};

		/**
		 * Description
		 * @method getLanguage language
		 */
		this.getLanguage = function () {
			var language = this.languageCollection.$selected || ipCookie.get('lang');

			if (!_.isObject(language)) {
				language = this.languageCollection.$findByCode(language);
			}

			return language;
		};
	};

	module.service('LanguageAPI', LanguageAPI);
});


