define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class SelectField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf {Object} Module configuration
	 * @return {*|Model}
	 */
	function SelectField($log, restmod, fieldsConf) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'select.html'
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('SelectField', SelectField);
});
