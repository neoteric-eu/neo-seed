define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param EmailAddressValidator Validator data model
	 * @return {*|Model}
	 */
	function EmailField($log, restmod, fieldsConf,
		DocumentFieldTypesEnum, EmailAddressValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'email'
				},
				label: {
					init: DocumentFieldTypesEnum.DATE.label
				},
				validators: {
					init: {
						emailAddress: EmailAddressValidator.$build()
					}
				}
			});
	}

	module.factory('EmailField', EmailField);
});
