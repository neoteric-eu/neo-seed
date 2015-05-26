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
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: docsModuleConf.VALIDATOR_TEMPLATES_PATH + 'emailAddress.html'
				}
			});
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
