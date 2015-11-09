define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor DateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		decode: 'DateDecode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function DateDecodeFilter($log) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return moment(val, 'YYYY-MM-DD');
		};
	}

	app.factory('DateDecodeFilter', DateDecodeFilter);
});
