define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class CompositeField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Logging service
	 * @param restmod Data model layer interface
	 * @return {*|Model} Model instance
	 */
	function CompositeField($log, restmod) {
		$log.debug('Created new instance');

		return restmod
			.model('/field-templates')
			.mix('Field', {

				// MODEL CONFIGURATION
				$config: {
					name: 'CompositeField'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				label: {
					init: 'New field template'
				},
				type: {
					init: 'CompositeField'
				}

				// HOOKS
				// METHODS
			});
	}

	module.factory('CompositeField', CompositeField);
});
