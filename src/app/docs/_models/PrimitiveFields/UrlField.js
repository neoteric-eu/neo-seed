define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class UrlField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function UrlField($log, restmod, fieldsConf) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/inputField/input-field-template.html'
				},
				inputType: {
					init: 'url'
				},
				validators: {
					init: {
						uri: {}
					}
				}
			});
	}

	module.factory('UrlField', UrlField);
});
