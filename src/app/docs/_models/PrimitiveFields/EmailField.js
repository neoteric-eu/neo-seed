define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function EmailField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'EMAIL'
				}
			});
	}

	module.registerFactory('EmailField', EmailField);
});
