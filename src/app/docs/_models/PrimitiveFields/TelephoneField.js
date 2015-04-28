define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TelephoneField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TelephoneField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'NUMBER'
				},
				pattern: {
					init: undefined
				}
			});
	}

	module.registerFactory('TelephoneField', TelephoneField);
});
