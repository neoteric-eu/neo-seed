define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class StringLengthValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'stringLength'
	 *  min: 2
	 *  max: 5
	 *  trim: false
	 * }
	 * @see {@link http://formvalidation.io/validators/stringLength/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function StringLengthValidator($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'stringLength.html'
				},
				// The minimum length of the value
				min: {},
				// The maximum length of the value
				max: {},
				// Indicate the length will be calculated after trimming the value or not
				trim: {
					init: false
				}
			});
	}

	module.factory('StringLengthValidator', StringLengthValidator);
});
