define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'TimeEncode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function TimeEncodeFilter($log, TimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return TimeSerializerService.encode(val);
		};
	}

	module.factory('TimeEncodeFilter', TimeEncodeFilter);
});
