define(['app'], function (app) {
	'use strict';

	/**
	 * @constructor FieldValidatorDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		decode: 'FieldValidatorDecode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @param $log Console log provider
	 * @return {Function}
	 */
	function FieldValidatorDecodeFilter($log) {
		return function (val) {
			$log.debug('Decoding FieldValidator values');
			return _.indexBy(val, 'validatorType');
		};
	}

	app.factory('FieldValidatorDecodeFilter', FieldValidatorDecodeFilter);
});
