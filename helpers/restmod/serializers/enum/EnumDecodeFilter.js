define(['seed/module'], function (app) {
	'use strict';

	/**
	 * @constructor EnumDecodeFilter
	 * @deprecated
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
	function EnumDecodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (key, Enum) {
			return Enum.getValueByKey(key);
		};
	}

	app.factory('EnumDecodeFilter', EnumDecodeFilter);
});
