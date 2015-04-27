define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function ColorField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.COLOR
				}
			});
	}

	module.registerFactory('ColorField', ColorField);
});
