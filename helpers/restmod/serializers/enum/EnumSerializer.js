define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor EnumSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	enumField: {
	 *  		serialize: 'Enum'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function EnumSerializer($log) {
		$log = $log.getInstance('seed.helpers.EnumSerializer');

		function decode(key, Enum) {
			return Enum.getValueByKey(key);
		}

		function encode(val, Enum) {
			return Enum.getKeyByValue(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('EnumSerializer', EnumSerializer);
});
