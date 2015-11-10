define(['seed/helpers/module', 'moment'], function (module, moment) {
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
	 * @return {{decode: decode, encode: encode}}
	 */
	function DateSerializer($log) {
		$log = $log.getInstance('seed.helpers.DateSerializer');

		function decode(val) {
			return moment(val, 'YYYY-MM-DD');
		}

		function encode(val) {
			return val.format('YYYY-MM-DD');
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		}

	}

	module.factory('DateSerializer', DateSerializer);
});
