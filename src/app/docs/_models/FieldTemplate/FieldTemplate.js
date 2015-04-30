define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class FieldTemplate
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function FieldTemplate(restmod) {
		return restmod
			.model('/field-template')
			.mix({
				name: {
					init: ''
				},
				description: {
					init: ''
				},
				composite: {
					hasMany: 'FieldTemplate'
				}
			});
	}

	module.registerFactory('FieldTemplate', FieldTemplate);
});
