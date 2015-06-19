define([
	'docs/module',
	'angular-restmod-nested-dirty'
], function (module) {
	'use strict';

	//noinspection JSClosureCompilerSyntax
	/**
	 * @class Document
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model}
	 */
	function Document($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/documents')
			.mix('DocumentTemplate', 'NestedDirtyModel', {
				name: {
					init: 'New document'
				}
			});
	}

	module.factory('Document', Document);
});
