define(['seed/module', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor TimeEncodeFilter
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'TimeEncode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function TimeEncodeFilter() {
		return function (val) {
			return val.format('HH:mm');
		};
	}

	app.factory('TimeEncodeFilter', TimeEncodeFilter);
});
