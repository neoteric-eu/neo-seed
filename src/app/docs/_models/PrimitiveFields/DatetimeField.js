define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DatetimeField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function DatetimeField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'DATETIME'
				}
			});
	}

	module.registerFactory('DatetimeField', DatetimeField);
});
