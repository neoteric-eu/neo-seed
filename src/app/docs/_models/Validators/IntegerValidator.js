define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class IntegerValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function IntegerValidator($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				validatorType: {
					init: 'integer'
				},
				integer: {
					init: {}
				}
			});
	}

	module.factory('IntegerValidator', IntegerValidator);
});
