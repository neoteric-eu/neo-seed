define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function TextareaField($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: docsModuleConf.FIELD_TEMPLATES_PATH + 'textarea.html'
				}
			});
	}

	module.factory('TextareaField', TextareaField);
});
