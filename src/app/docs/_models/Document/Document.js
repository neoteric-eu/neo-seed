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
	 * @param VersionAPI {Object} Interface for REST communication with server
	 * @return {*|Model} Model instance
	 */
	function Document($log, restmod, VersionAPI) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/documents')
			.mix('DocumentTemplate', {

				// MODEL CONFIGURATION
				$config: {
					name: 'Document'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				name: {
					init: 'New document'
				},
				versions: {
					hasMany: 'Version'
				},
				type: {
					init: 'Document'
				},

				// HOOKS
				$hooks: {
					'after-init': function () {
						this.versions.$add(
							VersionAPI.build({
								version: 1
							})
						);
					}
				}

				// METHODS
			});
	}

	module.factory('Document', Document);
});
