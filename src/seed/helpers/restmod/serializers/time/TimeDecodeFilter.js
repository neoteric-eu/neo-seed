define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'TimeDecode'
	 *    }
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function TimeDecodeFilter($log, TimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return TimeSerializerService.decode(val);
		};
	}

	module.factory('TimeDecodeFilter', TimeDecodeFilter);
});
