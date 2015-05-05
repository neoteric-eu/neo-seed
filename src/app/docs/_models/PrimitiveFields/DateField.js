define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function DateField($log, restmod, fieldsConf) {
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
						date: {}
					}
				}
			});
	}

	module.factory('DateField', DateField);
});
