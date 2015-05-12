define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class UrlField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param restmod Data model layer interface
	 * @param UriValidator Validator data model
	 * @return {*|Model}
	 */
	function UrlField($log, restmod, FieldTypesEnum, fieldsConf, UriValidator) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'inputField/input.html'
				},
				$inputType: {
					init: 'url'
				},
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum,
					init: FieldTypesEnum.URL
				},
				validators: {
					init: {
						uri: UriValidator.$build({$isRemovable: false})
					}
				}
			});
	}

	module.factory('UrlField', UrlField);
});
