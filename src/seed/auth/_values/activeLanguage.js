define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Stores currently used language in application [READ ONLY].
	 *
	 * This object is used for easier access to value.
	 * To manipulate language selection use neoLanguage service.
	 *
	 * @class activeLanguage
	 * @memberOf seed.auth
	 *
	 * @param LanguageAPI {seed.auth.LanguageAPI}
	 * @param appConf {app.appConf} Application configuration
	 * @returns {seed.auth.Language}
	 */
	module.value('activeLanguage', {});
});