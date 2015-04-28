define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NumberField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function NumberField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'NUMBER'
				},
				min: {
					init: 0
				},
				max: {
					init: undefined
				},
				step: {
					init: 1
				}
			});
	}

	module.registerFactory('NumberField', NumberField);
});
