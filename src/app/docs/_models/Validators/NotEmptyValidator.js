define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NotEmptyValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'integer'
	 * }
	 * @see {@link http://formvalidation.io/validators/notEmpty/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function NotEmptyValidator($log, fieldsConf, restmod, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'notEmpty.html'
				},
				validatorType: {
					init: 'notEmpty'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.REQUIRED
				}
			});
	}

	module.factory('NotEmptyValidator', NotEmptyValidator);
});
