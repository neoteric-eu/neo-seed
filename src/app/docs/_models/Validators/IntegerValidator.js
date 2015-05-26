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
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function IntegerValidator($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: docsModuleConf.VALIDATOR_TEMPLATES_PATH + 'integer.html'
			}
			});
	}

	module.factory('IntegerValidator', IntegerValidator);
});
