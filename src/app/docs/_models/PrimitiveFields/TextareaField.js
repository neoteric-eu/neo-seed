define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param DocumentFieldTypesEnum Available primitive fields enum
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TextareaField($log, restmod,
		DocumentFieldTypesEnum, fieldsConf) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + '/textareaField/textarea.html'
				},
				label: {
					init: DocumentFieldTypesEnum.DATE.label
				}
			});
	}

	module.factory('TextareaField', TextareaField);
});
