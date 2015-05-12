define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class IntegerValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'integer'
	 * }
	 * @see {@link http://formvalidation.io/validators/integer/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param fieldsConf {Object} Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function IntegerValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'integer.html'
				},
				validatorType: {
					init: 'integer'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.INTEGER
				}
			});
	}

	module.factory('IntegerValidator', IntegerValidator);
});
