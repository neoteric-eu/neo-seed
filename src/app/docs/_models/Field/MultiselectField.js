define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class MultiselectField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model}
	 */
	function MultiselectField($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: '/app/docs/_directives/docsField/fields/multiselect.html'
				},
				options: {
					init: ['one', 'two', 'three']
				}
			});
	}

	module.factory('MultiselectField', MultiselectField);
});
