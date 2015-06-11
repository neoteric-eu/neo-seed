define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateValidator
	 * @mixes {app.docs.Validator}
	 * @memberOf app.docs
	 *
	 * @example
	 * {
	 *  validatorType: 'date'
	 *  min: '10-03-2015'
	 *  max: '21-03-2015'
	 * }
	 * @see {@link http://formvalidation.io/validators/date/}
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model}
	 */
	function DateValidator($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Validator', {
				$templateUrl: {
					init: '/app/docs/_directives/docsValidator/validators/date.html'
				},
				format: 'YYYY-MM-DD',
				// The minimal acceptable date
				min: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				},
				// The maximal acceptable date
				max: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				}
			});
	}

	module.factory('DateValidator', DateValidator);
});
