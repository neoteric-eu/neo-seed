define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Validator holding phone validator model initial properties
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
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model} Model instance
	 */
	function PhoneValidator($log, restmod, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/phone.html'
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
