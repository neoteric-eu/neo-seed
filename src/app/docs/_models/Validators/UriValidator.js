define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class UriValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'uri'
	 * }
	 * @see {@link http://formvalidation.io/validators/uri/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param fieldsConf Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function UriValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'uri.html'
				},
				validatorType: {
					init: 'uri'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.URI
				}
			});
	}

	module.factory('UriValidator', UriValidator);
});
