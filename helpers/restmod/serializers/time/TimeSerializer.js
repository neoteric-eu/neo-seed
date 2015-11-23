define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	startHour: {
	 *  		serialize: 'Enum'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function TimeSerializer($log, TimeSerializerService) {
		$log = $log.getInstance('seed.helpers.TimeSerializer');

		function decode(val) {
			return TimeSerializerService.decode(val);
		}

		function encode(val) {
			return TimeSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('TimeSerializer', TimeSerializer);
});
