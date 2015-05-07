define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Validator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function Validator($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod.model();
	}

	module.factory('Validator', Validator);
});
