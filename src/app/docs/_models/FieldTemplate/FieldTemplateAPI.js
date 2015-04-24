define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param BaseAPI
	 * @param FieldTemplate
	 * @return {*}
	 */
	function FieldTemplateAPI(BaseAPI, FieldTemplate) {
		return new BaseAPI(FieldTemplate);
	}

	module.registerService('FieldTemplateAPI', FieldTemplateAPI);
});



