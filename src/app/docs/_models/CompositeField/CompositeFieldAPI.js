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
	 * @param CompositeField {Object} Data model class
	 * @return {*}
	 */
	function CompositeFieldAPI($log, BaseAPI, CompositeField) {

		$log.debug('Initiating API service');

		return new BaseAPI(CompositeField);
	}

	module.service('CompositeFieldAPI', CompositeFieldAPI);
});



