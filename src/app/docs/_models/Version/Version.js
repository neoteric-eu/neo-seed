define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Generic that handles object versioning
	 * @class Version
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	function Version($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model('version')
			.mix();
	}

	module.factory('Version', Version);
});
