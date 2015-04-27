define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DatetimeField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function DatetimeField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.DATETIME
				}
			});
	}

	module.registerFactory('DatetimeField', DatetimeField);
});
