define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Validator holding integer validator model initial properties
	 * @class IntegerValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'integer'
	 * }
	 * @see {@link http://formvalidation.io/validators/integer/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model} Model instance
	 */
	function IntegerValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/integer.html'
			}
			});
	}

	module.factory('IntegerValidator', IntegerValidator);
});
