define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param BaseAPI
	 * @param Document
	 * @return {*}
	 */
	function DocumentAPI(BaseAPI, Document) {
		return new BaseAPI(Document);
	}

	module.registerService('DocumentAPI', DocumentAPI);
});



