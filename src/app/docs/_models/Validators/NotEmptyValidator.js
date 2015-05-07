define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class NotEmptyValidator
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param fieldsConf Module configuration
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function NotEmptyValidator($log, fieldsConf, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				validatorType: {
					init: 'notEmpty'
				},
				$templateUrl: {
					init: fieldsConf.MODULE_PATH + '/views/validators/notEmpty.html'
				},
				notEmpty: {
					init: {}
				}
			});
	}

	module.factory('NotEmptyValidator', NotEmptyValidator);
});
