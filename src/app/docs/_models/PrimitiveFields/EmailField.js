define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param EmailAddressValidator Validator data model
	 * @return {*|Model}
	 */
	function EmailField($log, restmod, fieldsConf, FieldTypesEnum, EmailAddressValidator) {

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
					init: FieldTypesEnum.EMAIL
				},
				$inputType: {
					init: 'email'
				},
				validators: {
					init: {
						emailAddress: EmailAddressValidator.$build({$isRemovable: false})
					}
				}
			});
	}

	module.factory('EmailField', EmailField);
});
