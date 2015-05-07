define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param fieldsConf Module configuration
	 * @param DateValidator Validator data model
	 * @return {*|Model}
	 */
	function DateField($log, restmod, fieldsConf, DateValidator) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/inputField/input-field-template.html'
				},
				inputType: {
					init: 'date'
				},
				validators: {
					init: {
						date: DateValidator.$build()
					}
				}
			});
	}

	module.factory('DateField', DateField);
});
