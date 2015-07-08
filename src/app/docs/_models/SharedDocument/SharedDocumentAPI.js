define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor SharedDocumentAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param SharedDocument {Object} Data model class
	 * @return {Function} Instantiated service
	 */
	function SharedDocumentAPI($log, BaseAPI, SharedDocument) {

		$log.debug('Instantiated API service');

		return new BaseAPI(SharedDocument);
	}

	module.service('SharedDocumentAPI', SharedDocumentAPI);
});



