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
	 * @return {*}
	 */
	function ValidatorAPI($log, BaseAPI, Validator) {

		$log.debug('Initiating API service');

		return new BaseAPI(Validator);
	}

	module.service('ValidatorAPI', ValidatorAPI);
});



