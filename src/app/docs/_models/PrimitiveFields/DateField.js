define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function DateField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'DATE'
				}
			});
	}

	module.registerFactory('DateField', DateField);
});
