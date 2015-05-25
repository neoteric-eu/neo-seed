define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TimeField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function TimeField($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Field', {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'input.html'
			},
			$inputType: {
				init: 'time'
			}
			});
	}

	module.factory('TimeField', TimeField);
});
