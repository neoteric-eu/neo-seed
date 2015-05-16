define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class UriValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'uri'
	 * }
	 * @see {@link http://formvalidation.io/validators/uri/}
	 * @param $log {Object} Logging service
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function UriValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'uri.html'
			},
			allowEmptyProtocol: {
				init: false
			}
		};
	}

	module.factory('UriValidator', UriValidator);
});
