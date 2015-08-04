define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor TimeDecodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'TimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function TimeDecodeFilter() {
		return function (val) {
			return moment(val, 'HH:mm');
		};
	}

	app.factory('TimeDecodeFilter', TimeDecodeFilter);
});
