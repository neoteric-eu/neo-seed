define(['seed/module'], function (app) {
	'use strict';

	/**
	 * @constructor EnumDecodeFilter
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	enumField: {
	 *    	decode: 'EnumDecode'
	 * 		}
	 *	});
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function EnumDecodeFilter() {
		return function (key, Enum) {
			return Enum.getValueByKey(key);
		};
	}

	app.factory('EnumDecodeFilter', EnumDecodeFilter);
});
