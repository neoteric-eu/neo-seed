define(['seed/module', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor dateDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		encode: 'DatetimeEncode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function DatetimeEncodeFilter() {
		return function (val) {
			return val.utc().toISOString();
		};
	}

	app.factory('DatetimeEncodeFilter', DatetimeEncodeFilter);
});
