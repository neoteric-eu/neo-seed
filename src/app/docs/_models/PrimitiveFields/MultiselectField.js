define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class MultiselectField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param FieldTypesEnum Available primitive fields enum
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function MultiselectField($log, restmod,
		FieldTypesEnum, FieldValidatorsEnum, fieldsConf) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/selectField/multiselect.html'
				},
				options: {
					init: {}
				},
				label: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum,
					init: FieldTypesEnum.MULTI_SELECT
				},
				multiple: {
					init: true
				}
			});
	}

	module.factory('MultiselectField', MultiselectField);
});
