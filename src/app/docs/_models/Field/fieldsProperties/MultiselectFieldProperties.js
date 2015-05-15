define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class MultiselectFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @return {{$templateUrl: {init: string}, options: {init: {}}, multiple: {init: boolean}}}
	 */
	function MultiselectFieldProperties($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'selectField/multiselect.html'
			},
			options: {
				init: {}
			},
			multiple: {
				init: true
			}
		};
	}

	module.factory('MultiselectFieldProperties', MultiselectFieldProperties);
});
