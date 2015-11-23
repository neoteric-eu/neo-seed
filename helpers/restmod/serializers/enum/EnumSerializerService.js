define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor EnumSerializerService
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
	function EnumSerializerService($log) {
		$log = $log.getInstance('seed.helpers.EnumSerializerService');

		this.decode = function (key, Enum) {
			return Enum.getValueByKey(key);
		};

		this.encode = function (val, Enum) {
			return Enum.getKeyByValue(val);
		};

		$log.debug('Initialized service');

	}

	module.service('EnumSerializerService', EnumSerializerService);
});
