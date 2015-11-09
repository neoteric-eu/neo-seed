define(['seed/module', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor DateEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 * 		createdAt: {
	 * 			encode: 'DateEncode'
	 * 		}
	 * 	});
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function DateEncodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return val.format('YYYY-MM-DD');
		};
	}

	app.factory('DateEncodeFilter', DateEncodeFilter);
});
