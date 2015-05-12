define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailAddressValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'emailAddress'
	 * }
	 * @see {@link http://formvalidation.io/validators/emailAddress/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'emailAddress.html'
				},
				validatorType: {
					init: 'emailAddress'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.EMAIL
				}
			});
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
