define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Validator holding required validator model initial properties
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
	 * @return {*|Model} Model instance
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
