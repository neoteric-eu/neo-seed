define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextareaFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @return {{$templateUrl: {init: string}}}
	 */
	function TextareaFieldProperties($log, fieldsConf) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'textareaField/textarea.html'
			}
		};
	}

	module.factory('TextareaFieldProperties', TextareaFieldProperties);
});
