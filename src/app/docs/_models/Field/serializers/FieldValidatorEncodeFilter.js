define(['app'], function (app) {
	'use strict';

	/**
	 * @constructor dateDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 * 		createdAt: {
	 * 			encode: 'FieldValidatorEncode'
	 * 		}
	 * 	});
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @param $log Console log provider
	 * @return {Function}
	 */
	function FieldValidatorEncodeFilter($log) {
		return function (val) {
			var prop = 'fieldType';
			$log.debug('Decoding FieldValidator values');
			return _.transform(val, function (result, item, name) {
				result[item[prop]] = result[item[prop]] || {};
				result[item[prop]][name] = item;
			});

		};
	}

	app.factory('FieldValidatorEncodeFilter', FieldValidatorEncodeFilter);
});
