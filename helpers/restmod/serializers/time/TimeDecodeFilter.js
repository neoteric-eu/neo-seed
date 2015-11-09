define(['seed/module', 'moment'], function (app, moment) {
	'use strict';

	/**
	 * @constructor TimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'TimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 * @return {Function}
	 */
	function TimeDecodeFilter() {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return moment(val, 'HH:mm');
		};
	}

	app.factory('TimeDecodeFilter', TimeDecodeFilter);
});
