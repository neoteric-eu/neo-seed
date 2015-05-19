define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function TextareaField($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Field', {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'textareaField/textarea.html'
			}
			});
	}

	module.factory('TextareaField', TextareaField);
});
