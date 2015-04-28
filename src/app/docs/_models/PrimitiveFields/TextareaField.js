define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TextareaField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'TEXTAREA'
				}
			});
	}

	module.registerFactory('TextareaField', TextareaField);
});
