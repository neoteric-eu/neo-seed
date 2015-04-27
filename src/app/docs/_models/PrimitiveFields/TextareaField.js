define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function TextareaField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.TEXTAREA
				}
			});
	}

	module.registerFactory('TextareaField', TextareaField);
});
