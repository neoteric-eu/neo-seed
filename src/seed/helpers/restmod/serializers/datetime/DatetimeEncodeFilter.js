define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor dateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		encode: 'DatetimeEncode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DatetimeEncodeFilter($log, DatetimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return DatetimeSerializerService.encode(val);
		};
	}

	module.factory('DatetimeEncodeFilter', DatetimeEncodeFilter);
});
