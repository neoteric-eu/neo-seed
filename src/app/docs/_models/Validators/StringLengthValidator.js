define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Validator holding string-length validator model initial properties
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
	 * @return {*|Model} Model instance
	 */
	function StringLengthValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/stringLength.html'
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
