define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class FieldTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
	 * @return {*|Model}
	 */
	function FieldTemplate(restmod, gettext) {
		return restmod
			.model('/field-template')
			.mix({
				fields: {
					hasMany: 'FieldTemplate'
				},
				type: {
					init: gettext('field template')
				}
			});
	}

	module.registerFactory('FieldTemplate', FieldTemplate);
});
