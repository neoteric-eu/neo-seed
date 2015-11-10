define(['seed/module', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor dateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		encode: 'DatetimeEncode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function DatetimeEncodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return val.utc().toISOString();
		};
	}

	app.factory('DatetimeEncodeFilter', DatetimeEncodeFilter);
});
