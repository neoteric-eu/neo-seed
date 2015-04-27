define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function DateField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.DATE
				}
			});
	}

	module.registerFactory('DateField', DateField);
});
