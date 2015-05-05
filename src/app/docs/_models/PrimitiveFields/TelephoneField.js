define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TelephoneField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TelephoneField($log, restmod, fieldsConf) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/inputField/input-field-template.html'
				},
				inputType: {
					init: 'text'
				},
				validators: {
					init: {
						phone: {}
					}
				}
			});

	}

	module.factory('TelephoneField', TelephoneField);
});
