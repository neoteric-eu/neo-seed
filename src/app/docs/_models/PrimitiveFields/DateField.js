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
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param DateValidator Validator data model
	 * @return {*|Model}
	 */
	function DateField($log, restmod, fieldsConf,
		DocumentFieldTypesEnum, DateValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'date'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.DATE
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
