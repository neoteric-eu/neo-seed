define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'color'
	 *  type: 'hex'
	 * }
	 * @see {@link http://formvalidation.io/validators/color/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param fieldsConf {Object} Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function ColorValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'color.html'
				},
				validatorType: {
					init: 'color'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.COLOR
				},
				// The type of color
				type: {
					init: 'hex'
				}
			});
	}

	module.factory('ColorValidator', ColorValidator);
});
