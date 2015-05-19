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
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function UriValidator($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'uri.html'
				},
				allowEmptyProtocol: {
					init: false
				}
			});
	}

	module.factory('UriValidator', UriValidator);
});
