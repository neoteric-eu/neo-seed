define(['seed/helpers/module', 'moment'], function (module, moment) {
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
	 * @return {{decode: decode, encode: encode}}
	 */
	function DatetimeSerializer($log) {
		$log = $log.getInstance('seed.helpers.DatetimeSerializer');

		function decode(val) {
			return moment(val, moment.ISO_8601);
		}

		function encode(val) {
			return val.utc().toISOString();
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('DatetimeSerializer', DatetimeSerializer);
});
