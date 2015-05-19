define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NotEmptyValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'integer'
	 * }
	 * @see {@link http://formvalidation.io/validators/notEmpty/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function NotEmptyValidator($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'notEmpty.html'
				}
			});
	}

	module.factory('NotEmptyValidator', NotEmptyValidator);
});
