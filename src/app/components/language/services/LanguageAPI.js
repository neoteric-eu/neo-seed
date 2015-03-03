define(['app', 'globalSettings', 'moment'], function (module, globalSettings, moment) {
	'use strict';

	/**
	 * Description* @constructs LanguageAPI
	 * @method LanguageAPI
	 * @param Language
	 * @param $rootScope
	 * @param ipCookie
	 * @param gettextCatalog
	 * @param amMoment
	 */
	var LanguageAPI = function (Language, $rootScope, ipCookie, gettextCatalog, amMoment) {

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
				.$build(globalSettings.get('LANGUAGES'))
				.$reveal()
				.$asPromise()
				.then(function (data) {
					self.languageCollection = data;
					self.setLanguage(
						ipCookie('lang') || globalSettings.get('DEFAULT_LANG')
					);
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
			ipCookie('lang', language.code, angular.copy(globalSettings.cookieOptions));

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
			var language = this.languageCollection.$selected || ipCookie('lang');

			if (!_.isObject(language)) {
				language = this.languageCollection.$findByCode(language);
			}

			return language;
		};
	};

	module.registerService('LanguageAPI', LanguageAPI);
});


