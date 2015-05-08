define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PhoneField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param restmod Data model layer interface
	 * @param PhoneValidator
	 * @return {*|Model}
	 */
	function PhoneField($log, restmod, DocumentFieldTypesEnum,
		fieldsConf, PhoneValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'text'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.PHONE
				},
				validators: {
					init: {
						phone: PhoneValidator.$build()
					}
				}
			});

	}

	module.factory('PhoneField', PhoneField);
});
