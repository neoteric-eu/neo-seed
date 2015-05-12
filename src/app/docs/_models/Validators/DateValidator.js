define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'date'
	 *  min: '10-03-2015'
	 *  max: '21-03-2015'
	 * }
	 * @see {@link http://formvalidation.io/validators/date/}
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param fieldsConf {Object} Module configuration
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function DateValidator($log, restmod, fieldsConf, FieldValidatorsEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'date.html'
				},
				validatorType: {
					init: 'date'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum,
					init: FieldValidatorsEnum.DATE
				},
				// The minimal acceptable date
				min: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				},
				// The maximal acceptable date
				max: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				}
			});
	}

	module.factory('DateValidator', DateValidator);
});
