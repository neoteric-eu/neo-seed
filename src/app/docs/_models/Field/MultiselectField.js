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
	 * @return {*|Model} Model instance
	 */
	function MultiselectField($log, restmod) {

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
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('MultiselectField', MultiselectField);
});
