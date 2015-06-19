define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding select field model initial properties
	 * @class SelectField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @return {*|Model} Model instance
	 */
	function SelectField($log, restmod, gettextCatalog) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/select.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/select-properties.html'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Select');
					}
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('SelectField', SelectField);
});
