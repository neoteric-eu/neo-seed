define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PhoneValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'phone'
	 *  country: 'US'
	 * }
	 * @see {@link http://formvalidation.io/validators/phone/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param fieldsConf Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function PhoneValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'phone.html'
				},
				validatorType: {
					init: 'phone'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.PHONE
				},
				country: {
					init: 'US'
				}
			});
	}

	module.factory('PhoneValidator', PhoneValidator);
});
