define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Stores container wide set of available languages [READ ONLY].
	 *
	 * This object is used for wasier access to value.
	 * To manipulate language selection use neoLanguage service.
	 *
	 * @name availableLanguages
	 * @memberOf seed.auth
	 *
	 * @param LanguageAPI {seed.auth.LanguageAPI}
	 * @param appConf {app.appConf} Application configuration
	 * @returns {seed.auth.Language}
	 */
	module.value('availableLanguages', []);
});