define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function EmailField(restmod, fieldsConf) {
		return restmod
			.model()
			.mix({
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/forms/emailField/email-field-template.html'
				},
				label: {
					init: 'Email'
				},
				defaultValue: {
					init: ''
				},
				note: {
					init: ''
				},
				required: {
					init: false
				},
				disabled: {
					init: false
				},
				validators: {
					init: [
						{
							name: 'notEmpty',
							message: 'The option required and cannot be empty'
						},
						{
							name: 'stringLength',
							max: 100,
							message: 'The option must be less than 100 characters long'
						}
					]
				}
			});
	}

	module.registerFactory('EmailField', EmailField);
});
