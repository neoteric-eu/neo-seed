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
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'emailAddress.html'
				}
			});
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
