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
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function PhoneValidator($log, restmod, docsModuleConf, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: docsModuleConf.VALIDATOR_TEMPLATES_PATH + 'phone.html'
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
