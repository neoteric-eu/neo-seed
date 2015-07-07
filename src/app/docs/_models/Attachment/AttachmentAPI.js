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
	 * @param Attachment {Object} Data model class
	 * @param Upload {Object} File upload service
	 * @return {Function} Instantiated service
	 */
	function AttachmentAPI($log, BaseAPI, Attachment, Upload) {

		$log.debug('Instantiated API service');

		var api = new BaseAPI(Attachment);

		api.upload = function (model) {
			$log.debug('Called AttachmentAPI "upload" method');

			return Upload
				.upload({
					url: 'http://ntrc-delta.neoteric.eu:9035/api/v1/attachments',
					sendFieldsAs: 'form',
					file: model
				});
		};

		api.download = function (id) {
			$log.debug('Called AttachmentAPI "download" method to download file with ID: ' + id);

			return api.get(id);
		};

		return api;
	}

	module.service('AttachmentAPI', AttachmentAPI);
});



