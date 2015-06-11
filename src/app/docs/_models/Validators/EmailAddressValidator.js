define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailAddressValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'emailAddress'
	 * }
	 * @see {@link http://formvalidation.io/validators/emailAddress/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/emailAddress.html'
				}
			});
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
