define(['seed/module'], function (module) {
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
	 *
	 * @param $log {Object} Logging service
	 * @param EnumSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function EnumEncodeFilter($log, EnumSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (val, Enum) {
			return EnumSerializerService.encode(val, Enum);
		};
	}

	module.factory('EnumEncodeFilter', EnumEncodeFilter);
});
