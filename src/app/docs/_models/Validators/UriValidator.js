define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function ColorValidator($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				validatorType: {
					init: 'uri'
				}
			});
	}

	module.factory('ColorValidator', ColorValidator);
});
