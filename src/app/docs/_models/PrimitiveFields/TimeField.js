define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TimeField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TimeField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'TIME'
				}
			});
	}

	module.registerFactory('TimeField', TimeField);
});
