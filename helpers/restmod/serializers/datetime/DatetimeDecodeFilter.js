define(['seed/module'], function (module) {
	'use strict';

	/**
	 * @constructor DatetimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'DatetimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DatetimeDecodeFilter($log, DatetimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return DatetimeSerializerService.decode(val);
		};
	}

	module.factory('DatetimeDecodeFilter', DatetimeDecodeFilter);
});
