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
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function DateValidator($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.VALIDATOR_TEMPLATES_PATH + 'date.html'
			},
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
		};
	}

	module.factory('DateValidator', DateValidator);
});
