define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @extends {seed.helpers.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param Language {Object} Model factory
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @return {Function} Instantiated service
	 */
	var LanguageAPI = function ($log, Language, BaseAPI) {

		$log = $log.getInstance('seed.auth.LanguageAPI');
		$log.debug('Initiated service');

		return new BaseAPI(Language);
	};

	module.service('LanguageAPI', LanguageAPI);
});


