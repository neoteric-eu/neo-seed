define(['seed/module'], function (app) {
	'use strict';

	/**
	 * @constructor EnumEncodeFilter
	 * @deprecated
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
	function EnumEncodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (val, Enum) {
			return Enum.getKeyByValue(val);
		};
	}

	app.factory('EnumEncodeFilter', EnumEncodeFilter);
});
