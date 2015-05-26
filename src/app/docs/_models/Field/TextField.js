define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function TextField($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
			$templateUrl: {
				init: docsModuleConf.FIELD_TEMPLATES_PATH + 'input.html'
			},
			$inputType: {
				init: 'text'
			}
			});
	}

	module.factory('TextField', TextField);
});
