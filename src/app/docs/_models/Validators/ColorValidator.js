define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'color'
	 *  type: 'hex'
	 * }
	 * @see {@link http://formvalidation.io/validators/color/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function ColorValidator($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: docsModuleConf.VALIDATOR_TEMPLATES_PATH + 'color.html'
				},
				// The type of color
				type: {
					init: 'hex'
				}
			});
	}

	module.factory('ColorValidator', ColorValidator);
});
