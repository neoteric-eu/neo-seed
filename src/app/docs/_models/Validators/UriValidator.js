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
	 * @param docsModuleConf Module configuration
	 * @return {*|Model}
	 */
	function UriValidator($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: docsModuleConf.VALIDATOR_TEMPLATES_PATH + 'uri.html'
				},
				allowEmptyProtocol: {
					init: false
				}
			});
	}

	module.factory('UriValidator', UriValidator);
});
