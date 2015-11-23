define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DatetimeSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		serialize: 'Datetime'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DatetimeSerializer($log, DatetimeSerializerService) {
		$log = $log.getInstance('seed.helpers.DatetimeSerializer');

		function decode(val) {
			return DatetimeSerializerService.decode(val);
		}

		function encode(val) {
			DatetimeSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};
	}

	module.factory('DatetimeSerializer', DatetimeSerializer);
});
