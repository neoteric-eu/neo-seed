define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param Validator {Object} Data model class
	 * @return {Function} Instantiated service
	 */
	function ValidatorAPI($log, BaseAPI, Validator) {

		$log.debug('Instantiated API service');

		return new BaseAPI(Validator);
	}

	module.service('ValidatorAPI', ValidatorAPI);
});



