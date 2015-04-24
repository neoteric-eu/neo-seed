define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Field
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
	 * @return {*|Model}
	 */
	function Field(restmod, gettext) {
		return restmod
			.model('/document-field')
			.mix('FieldTemplate', {
				fields: {
					hasMany: 'Field'
				},
				type: {
					init: gettext('field')
				}
			});
	}

	module.registerFactory('Field', Field);
});
