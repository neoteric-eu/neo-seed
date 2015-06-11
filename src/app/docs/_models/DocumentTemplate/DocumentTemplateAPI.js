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
	 * @param DocumentTemplate {Object} Data model class
	 * @return {Function} Instantiated service
	 */
	function DocumentTemplateAPI($log, BaseAPI, DocumentTemplate) {

		$log.debug('Instantiated API service');

		return new BaseAPI(DocumentTemplate);
	}

	module.service('DocumentTemplateAPI', DocumentTemplateAPI);
});



