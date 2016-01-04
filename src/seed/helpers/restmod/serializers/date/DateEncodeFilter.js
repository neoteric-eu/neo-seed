define(['seed/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 * 		createdAt: {
	 * 			encode: 'DateEncode'
	 * 		}
	 * 	});
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DateEncodeFilter($log, DateSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return DateSerializerService.encode(val);
		};
	}

	module.factory('DateEncodeFilter', DateEncodeFilter);
});
