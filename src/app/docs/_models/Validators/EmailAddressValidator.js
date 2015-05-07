define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class EmailAddressValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function EmailAddressValidator($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				validatorType: {
					init: 'emailAddress'
				}
			});
	}

	module.factory('EmailAddressValidator', EmailAddressValidator);
});
