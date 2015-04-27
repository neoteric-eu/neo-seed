define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NumberField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function NumberField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.NUMBER
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
