define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TimeFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @return {{$templateUrl: {init: string}, $inputType: {init: string}}}
	 */
	function TimeFieldProperties($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'inputField/input.html'
			},
			$inputType: {
				init: 'time'
			}
		};
	}

	module.factory('TimeFieldProperties', TimeFieldProperties);
});
