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
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function StringLengthValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'stringLength.html'
				},
				validatorType: {
					init: 'stringLength'
				},
				// The minimum length of the value
				min: {},
				// The maximum length of the value
				max: {},
				// Indicate the length will be calculated after trimming the value or not
				trim: {
					init: false
				}
		};
	}

	module.factory('StringLengthValidator', StringLengthValidator);
});
