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
	 * @return {*|Model} Model instance
	 */
	function SelectField($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: '/app/docs/_directives/docsField/fields/select.html'
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('SelectField', SelectField);
});
