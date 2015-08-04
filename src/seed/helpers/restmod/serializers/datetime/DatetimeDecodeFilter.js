define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor DatetimeDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'DatetimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function DatetimeDecodeFilter() {
		return function (val) {
			return moment(val, moment.ISO_8601);
		};
	}

	app.factory('DatetimeDecodeFilter', DatetimeDecodeFilter);
});
