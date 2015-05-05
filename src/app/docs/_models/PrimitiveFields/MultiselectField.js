define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class MultiselectField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param fieldsConf Module configuration
	 * @return {*|Model}
	 */
	function MultiselectField($log, restmod, fieldsConf) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/fields/selectField/multiselect-field-template.html'
				},
				options: {
					init: []
				},
				multiple: {
					init: true
				},
				validators: {
					init: {
						notEmpty: {}
					}
				}
			});
	}

	module.factory('MultiselectField', MultiselectField);
});
