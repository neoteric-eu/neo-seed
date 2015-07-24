define(['seed/module'], function (app) {
	'use strict';

	/**
	 * @constructor EnumEncodeFilter
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'EnumEncode'
	 *     	param: Enum
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function EnumEncodeFilter() {
		return function (val, Enum) {
			return Enum.getKeyByValue(val);
		};
	}

	app.factory('EnumEncodeFilter', EnumEncodeFilter);
});
