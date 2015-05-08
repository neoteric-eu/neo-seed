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
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function IntegerValidator($log, restmod, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
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
