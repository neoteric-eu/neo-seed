define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NumberField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param IntegerValidator Validator data model
	 * @return {*|Model}
	 */
	function NumberField($log, restmod, fieldsConf,
		FieldTypesEnum, IntegerValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'number'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum,
					init: FieldTypesEnum.NUMBER
				},
				validators: {
					init: {
						integer: IntegerValidator.$build({$isRemovable: false})
					}
				}
			});
	}

	module.factory('NumberField', NumberField);
});
