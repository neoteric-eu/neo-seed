define(['docs/module'], function (module) {
	'use strict';

	/**
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
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function IntegerValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'integer.html'
			}
		};
	}

	module.factory('IntegerValidator', IntegerValidator);
});
