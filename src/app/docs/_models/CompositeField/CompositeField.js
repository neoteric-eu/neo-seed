define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class CompositeField
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function CompositeField($log, restmod) {
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
					hasMany: 'CompositeField'
				}
			});
	}

	module.factory('CompositeField', CompositeField);
});
