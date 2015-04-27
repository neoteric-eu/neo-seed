define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class FieldTemplate
	 * @implements {app.BaseModel}
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function FieldTemplate(restmod) {
		return restmod
			.model('/field-template')
			.mix('Field', {
				name: {
					init: ''
				},
				description: {
					inti: ''
				},
				composite: {
					hasMany: 'FieldTemplate'
				}
			});
	}

	module.registerFactory('FieldTemplate', FieldTemplate);
});
