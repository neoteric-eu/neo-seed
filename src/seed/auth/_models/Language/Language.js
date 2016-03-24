define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param appConf {appConf} app configuration
	 * @param appConf.languageSettings {appConf.languageSettings} language settings
	 *
	 * @class Language
	 * @type {RecordApi}
	 * @property {string} code - The language code
	 * @property {string} locale - The language locale
	 * @property {string} localePOSIX - The posix locale code
	 *
	 * @returns {Language} Model instance
	 */
	function Language(restmod, appConf) {
		return restmod
			.model('/language')
			.mix({
				code: {
					init: appConf.languageSettings.defaultLanguage.code
				},
				locale: {
					init: appConf.languageSettings.defaultLanguage.locale
				},
				localePOSIX: {
					init: appConf.languageSettings.defaultLanguage.localePOSIX
				}
			});
	}

	module.factory('Language', Language);
});
