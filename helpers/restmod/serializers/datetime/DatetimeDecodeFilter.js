define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor DatetimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'DatetimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function DatetimeDecodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return moment(val, moment.ISO_8601);
		};
	}

	app.factory('DatetimeDecodeFilter', DatetimeDecodeFilter);
});
