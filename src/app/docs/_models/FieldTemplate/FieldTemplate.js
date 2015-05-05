define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class FieldTemplate
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function FieldTemplate($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/field-template')
			.mix({
				name: {
					init: ''
				},
				description: {
					init: ''
				},
				composite: {
					hasMany: 'FieldTemplate'
				}
			});
	}

	module.factory('FieldTemplate', FieldTemplate);
});
