define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function TextareaField($log, restmod, fieldsConf) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/textareaField/textarea-field-template.html'
				}
			});
	}

	module.factory('TextareaField', TextareaField);
});
