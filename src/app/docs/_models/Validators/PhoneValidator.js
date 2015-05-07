define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PhoneValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function PhoneValidator($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				validatorType: {
					init: 'phone'
				},
				country: {
					init: 'US'
				}
			});
	}

	module.factory('PhoneValidator', PhoneValidator);
});
