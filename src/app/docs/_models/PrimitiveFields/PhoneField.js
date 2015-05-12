define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PhoneField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param restmod Data model layer interface
	 * @param PhoneValidator
	 * @return {*|Model}
	 */
	function PhoneField($log, restmod, FieldTypesEnum, fieldsConf, PhoneValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'inputField/input.html'
				},
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum,
					init: FieldTypesEnum.PHONE
				},
				$inputType: {
					init: 'tel'
				},
				validators: {
					init: {
						phone: PhoneValidator.$build({$isRemovable: false})
					}
				}
			});

	}

	module.factory('PhoneField', PhoneField);
});
