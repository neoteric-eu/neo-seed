define(['seed/helpers/module'], function (module) {
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
	 *
	 * @param $log {Object} Logging service
	 * @param EnumSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function EnumDecodeFilter($log, EnumSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (key, Enum) {
			return EnumSerializerService.decode(key, Enum);
		};
	}

	module.factory('EnumDecodeFilter', EnumDecodeFilter);
});
