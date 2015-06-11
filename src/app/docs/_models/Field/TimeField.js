define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding time field model initial properties
	 * @class TimeField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model} Model instance
	 */
	function TimeField($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
			$templateUrl: {
				init: '/app/docs/_directives/docsField/fields/input.html'
			},
			$inputType: {
				init: 'time'
			}
			});
	}

	module.factory('TimeField', TimeField);
});
