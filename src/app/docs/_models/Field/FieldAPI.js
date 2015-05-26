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
	 * @param Field {Object} Data model class
	 * @return {*}
	 */
	function FieldAPI($log, BaseAPI, Field) {

		$log.debug('Instantiated API service');

		return new BaseAPI(Field);
	}

	module.service('FieldAPI', FieldAPI);
});



