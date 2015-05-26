define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class SelectField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function SelectField($log, restmod, docsModuleConf) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: docsModuleConf.FIELD_TEMPLATES_PATH + 'select.html'
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('SelectField', SelectField);
});
