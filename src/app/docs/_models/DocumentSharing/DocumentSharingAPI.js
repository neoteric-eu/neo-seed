define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor DocumentSharingAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param DocumentSharing {Object} Data model class
	 * @return {Function} Instantiated service
	 */
	function DocumentSharingAPI($log, BaseAPI, DocumentSharing) {

		$log.debug('Instantiated API service');
		var api = new BaseAPI(DocumentSharing);

		api.share = function (model) {
			return model
				.$share()
				.$asPromise();
		};

		return api;
	}

	module.service('DocumentSharingAPI', DocumentSharingAPI);
});



