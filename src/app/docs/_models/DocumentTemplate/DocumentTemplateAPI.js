define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param BaseAPI
	 * @param DocumentTemplate
	 * @return {*}
	 */
	function DocumentTemplateAPI(BaseAPI, DocumentTemplate) {

		$log.debug('Instantiated API service');

		return new BaseAPI(DocumentTemplate);
	}

	module.service('DocumentTemplateAPI', DocumentTemplateAPI);
});



