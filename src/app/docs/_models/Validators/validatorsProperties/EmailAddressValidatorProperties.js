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
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'emailAddress.html'
			}
		};
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
