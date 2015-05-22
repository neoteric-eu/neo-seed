define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class CompositeField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log Logging service
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function CompositeField($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/field-templates')
			.mix('Field', {
				//$config: {
				//	urlPrefix: 'http://192.168.1.23:9003/api/v1'
				//},
				description: {},
				version: {}
			});
	}

	module.factory('CompositeField', CompositeField);
});
