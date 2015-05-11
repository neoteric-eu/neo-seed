define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param FieldValidatorsEnum Available primitive fields enum
	 * @param ColorValidator Validator data model
	 * @return {*|Model}
	 */
	function ColorField($log, restmod, fieldsConf,
		FieldValidatorsEnum, ColorValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'color'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.COLOR
				},
				validators: {
					init: {
						color: ColorValidator.$build({$isRemovable: false})
					}
				}
			});
	}

	module.factory('ColorField', ColorField);
});
