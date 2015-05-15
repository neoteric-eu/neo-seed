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
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function ColorValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'color.html'
			},
			// The type of color
			type: {
				init: 'hex'
			}
		};
	}

	module.factory('ColorValidator', ColorValidator);
});
