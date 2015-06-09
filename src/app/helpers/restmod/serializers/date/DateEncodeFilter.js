define(['app', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor DateEncodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 * 		createdAt: {
	 * 			encode: 'DateEncode'
	 * 		}
	 * 	});
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function DateEncodeFilter() {
		return function (val) {
			return val.format('YYYY-MM-DD');
		};
	}

	app.registerFactory('DateEncodeFilter', DateEncodeFilter);
});
