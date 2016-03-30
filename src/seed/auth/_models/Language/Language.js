define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param defaultLanguage {seed.auth.Language} Default application language
	 *
	 * @class Language
	 * @type {RecordApi}
	 * @property {string} code - The language code
	 * @property {string} locale - The language locale
	 * @property {string} localePOSIX - The posix locale code
	 *
	 * @returns {Language} Model instance
	 */
	function Language(restmod, defaultLanguage) {
		return restmod
			.model('/language')
			.mix({
				code: {
					init: defaultLanguage.code
				},
				locale: {
					init: defaultLanguage.locale
				},
				localePOSIX: {
					init: defaultLanguage.localePOSIX
				}
			});
	}

	module.factory('Language', Language);
});
