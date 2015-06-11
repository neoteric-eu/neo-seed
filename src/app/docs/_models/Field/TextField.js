define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class TextField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @return {*|Model}
	 */
	function TextField($log, restmod) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: '/app/docs/_directives/docsField/fields/input.html'
				},
				$inputType: {
					init: 'text'
				}
			});
	}

	module.factory('TextField', TextField);
});
