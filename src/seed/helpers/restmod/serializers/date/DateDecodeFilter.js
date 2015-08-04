define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor DateDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		decode: 'DateDecode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function DateDecodeFilter() {
		return function (val) {
			return moment(val, 'YYYY-MM-DD');
		};
	}

	app.factory('DateDecodeFilter', DateDecodeFilter);
});
