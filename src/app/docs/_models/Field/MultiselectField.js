define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding multi-select field model initial properties
	 * @class MultiselectField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @return {*|Model} Model instance
	 */
	function MultiselectField($log, restmod, gettextCatalog) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/multiselect.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/multiselect-properties.html'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Multi-select');
					}
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('MultiselectField', MultiselectField);
});
