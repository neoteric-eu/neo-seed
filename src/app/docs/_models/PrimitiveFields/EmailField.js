define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param fieldsConf module configuration
	 * @return {*|Model}
	 */
	function EmailField(restmod, fieldsConf) {
		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/forms/emailField/email-field-template.html'
				},
				fieldType: {
					init: 'email'
				},
				label: {
					init: 'Email'
				},
				defaultValue: {
					init: ''
				},
				validators: {
					init: {
						emailAddress: {}
					}
				}
			});
	}

	module.registerFactory('EmailField', EmailField);
});
