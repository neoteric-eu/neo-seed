define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param fieldsConf Module configuration
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param DateValidator Validator data model
	 * @return {*|Model}
	 */
	function DateField($log, restmod, fieldsConf, FieldTypesEnum, DateValidator) {

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
					init: FieldTypesEnum.DATE
				},
				$inputType: {
					init: 'date'
				},
				validators: {
					init: {
						date: DateValidator.$build({$isRemovable: false})
					}
				}
			});
	}

	module.factory('DateField', DateField);
});
