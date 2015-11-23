define(['seed/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		decode: 'DateDecode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DateDecodeFilter($log, DateSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return DateSerializerService.decode(val);
		};
	}

	module.factory('DateDecodeFilter', DateDecodeFilter);
});
