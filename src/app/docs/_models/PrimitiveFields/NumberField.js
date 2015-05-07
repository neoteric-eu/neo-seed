define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NumberField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param IntegerValidator Validator data model
	 * @return {*|Model}
	 */
	function NumberField($log, restmod, fieldsConf, IntegerValidator) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/inputField/input-field-template.html'
				},
				inputType: {
					init: 'number'
				},
				validators: {
					init: {
						integer: IntegerValidator.$build()
					}
				}
			});
	}

	module.factory('NumberField', NumberField);
});
