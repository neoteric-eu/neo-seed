define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	dueDate: {
	 *  		serialize: 'Date'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DateSerializer($log, DateSerializerService) {
		$log = $log.getInstance('seed.helpers.DateSerializer');

		function decode(val) {
			return DateSerializerService.decode(val);
		}

		function encode(val) {
			return DateSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('DateSerializer', DateSerializer);
});
