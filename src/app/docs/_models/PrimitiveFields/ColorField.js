define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param ColorValidator Validator data model
	 * @return {*|Model}
	 */
	function ColorField($log, restmod, fieldsConf,
		DocumentFieldTypesEnum, ColorValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/inputField/input.html'
				},
				inputType: {
					init: 'color'
				},
				label: {
					init: DocumentFieldTypesEnum.COLOR.label
				},
				validators: {
					init: {
						color: ColorValidator.$build()
					}
				}
			});
	}

	module.factory('ColorField', ColorField);
});
