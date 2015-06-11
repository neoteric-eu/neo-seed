define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Validator holding uri validator model initial properties
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
	 * @return {*|Model} Model instance
	 */
	function UriValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/uri.html'
				},
				allowEmptyProtocol: {
					init: false
				}
			});
	}

	module.factory('UriValidator', UriValidator);
});
