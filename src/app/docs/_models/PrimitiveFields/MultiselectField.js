define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class MultiselectField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum
	 * @return {*|Model}
	 */
	function MultiselectField(restmod, DocumentFieldTypesEnum) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.MULTI_SELECT
				},
				multiple: {
					init: false
				}
			});
	}

	module.registerFactory('MultiselectField', MultiselectField);
});
