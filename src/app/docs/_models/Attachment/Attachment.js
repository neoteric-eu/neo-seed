define([
	'docs/module',
	'angular-restmod-nested-dirty'
], function (module) {
	'use strict';

	/**
	 * @class Attachment
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	function Attachment($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/attachments');
	}

	module.factory('Attachment', Attachment);
});
