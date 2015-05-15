define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class SelectFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @return {{$templateUrl: {init: string}, options: {init: Array}}}
	 */
	function SelectFieldProperties($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'selectField/select.html'
			},
			options: {
				init: []
			}
		};
	}

	module.factory('SelectFieldProperties', SelectFieldProperties);
});
