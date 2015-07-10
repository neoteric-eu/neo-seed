define([
	'docs/module'
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
	 * @param FieldTypesEnum {Object} Available primitive fields enum
	 * @return {*|Model} Model instance
	 */
	function Document($log, restmod, VersionAPI, FieldTypesEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/documents')
			.mix('DocumentTemplate', {

				// model configuration
				$config: {
					name: 'Document'
				},

				// attribute modifiers and relations
				templateId: {
					belongsTo: 'DocumentTemplate'
				},
				name: {
					init: 'New document'
				},
				fieldType: {
					init: FieldTypesEnum.getValueByKey('COMPOSITE')
				},

				// hooks
				$hooks: {
					'after-init': function () {
						this.versions.$add(
							VersionAPI.build({
								version: 1
							})
						);
					}
				}

				// methods
			});
	}

	module.factory('Document', Document);
});
