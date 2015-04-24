define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param BaseAPI
	 * @param Field
	 * @return {*}
	 */
	function FieldAPI(BaseAPI, Field) {
		return new BaseAPI(Field);
	}

	module.registerService('FieldAPI', FieldAPI);
});



