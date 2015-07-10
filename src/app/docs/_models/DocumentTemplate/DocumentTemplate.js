define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @param FieldTypesEnum {Object} Available primitive fields enum
	 * @return {*|Model} Model instance
	 */
	function DocumentTemplate($log, restmod, FieldTypesEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document-templates')
			.mix('Field', {

				// MODEL CONFIGURATION
				$config: {
					name: 'DocumentTemplate'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				name: {
					init: 'New document template'
				},
				version: {
					init: '1'
				},
				versions: {
					hasMany: 'Version'
				},
				fieldType: {
					init: FieldTypesEnum.getValueByKey('COMPOSITE')
				}

				// HOOKS
				// METHODS
			});
	}

	module.factory('DocumentTemplate', DocumentTemplate);
});
