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
	 * @param Document {Object} Data model class
	 * @return {*}
	 */
	function DocumentAPI(BaseAPI, Document) {

		$log.debug('Instantiated API service');

		return new BaseAPI(Document);
	}

	module.service('DocumentAPI', DocumentAPI);
});



