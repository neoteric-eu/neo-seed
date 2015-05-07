define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 * @param fieldsConf
	 */
	function DateValidator($log, restmod, fieldsConf) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/validators/date.html'
				},
				validatorType: {
					init: 'date'
				},
				value: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				},
				min: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				},
				max: {
					encode: 'DateEncode',
					decode: 'DateDecode'
				}
			});
	}

	module.factory('DateValidator', DateValidator);
});
