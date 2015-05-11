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
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function UriValidator($log, restmod, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
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
