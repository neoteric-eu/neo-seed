define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor ProjectAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param BaseAPI
	 * @param CompositeField
	 * @return {*}
	 */
	function CompositeFieldAPI(BaseAPI, CompositeField) {
		return new BaseAPI(CompositeField);
	}

	module.service('CompositeFieldAPI', CompositeFieldAPI);
});



