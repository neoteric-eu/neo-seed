define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param appConf {appConf} app configuration
	 * @return {*|Model} Model instance
	 */
	var Language = function (restmod, appConf) {
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
				},
				$extend: {
					Resource: {
						$setSelected: function (locale) {
							this.$selected = locale;
						}
					}
				}
			});
	};

	module.factory('Language', Language);
});
