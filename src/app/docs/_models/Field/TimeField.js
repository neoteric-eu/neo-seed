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
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @return {*|Model} Model instance
	 */
	function TimeField($log, restmod, gettextCatalog) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/input.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/input-properties.html'
				},
				$inputType: {
					init: 'time'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Time picker');
					}
				}
			});
	}

	module.factory('TimeField', TimeField);
});
