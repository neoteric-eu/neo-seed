define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function ColorField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'COLOR'
				}
			});
	}

	module.registerFactory('ColorField', ColorField);
});
