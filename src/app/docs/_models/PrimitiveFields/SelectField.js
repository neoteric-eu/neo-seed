define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class SelectField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function SelectField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'SELECT'
				},
				options: {
					init: []
				},
				multiple: {
					init: false
				}
			});
	}

	module.registerFactory('SelectField', SelectField);
});
