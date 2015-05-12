define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TextareaField($log, restmod, FieldTypesEnum, fieldsConf) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'textareaField/textarea.html'
				},
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum,
					init: FieldTypesEnum.TEXTAREA
				}
			});
	}

	module.factory('TextareaField', TextareaField);
});
