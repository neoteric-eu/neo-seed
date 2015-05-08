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
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param IntegerValidator Validator data model
	 * @return {*|Model}
	 */
	function NumberField($log, restmod, fieldsConf,
		DocumentFieldTypesEnum,IntegerValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'number'
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: DocumentFieldTypesEnum,
					init: DocumentFieldTypesEnum.NUMBER
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
