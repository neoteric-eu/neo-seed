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
		return new BaseAPI(DocumentTemplate);
	}

	module.registerService('DocumentTemplateAPI', DocumentTemplateAPI);
});



