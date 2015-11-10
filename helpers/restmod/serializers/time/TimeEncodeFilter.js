define(['seed/module', 'moment'], function (app) {
	'use strict';

	/**
	 * @constructor TimeEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'TimeEncode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 * @return {Function}
	 */
	function TimeEncodeFilter() {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return val.format('HH:mm');
		};
	}

	app.factory('TimeEncodeFilter', TimeEncodeFilter);
});
