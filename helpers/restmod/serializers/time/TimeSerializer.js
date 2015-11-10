define(['seed/helpers/module', 'moment'], function (module, moment) {
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
	 * @return {{decode: decode, encode: encode}}
	 */
	function TimeSerializer($log) {
		$log = $log.getInstance('seed.helpers.TimeSerializer');

		function decode(val) {
			return moment(val, 'HH:mm');
		}

		function encode(val) {
			return val.format('HH:mm');
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		}

	}

	module.factory('TimeSerializer', TimeSerializer);
});
