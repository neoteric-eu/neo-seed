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
	 * @return {*|Model}
	 */
	function NotEmptyValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/notEmpty.html'
				}
			});
	}

	module.factory('NotEmptyValidator', NotEmptyValidator);
});
