define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @class HttpRequestInterceptor
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @param $httpParamSerializer
	 * @param $httpParamSerializerJQLike
	 * @return {{transformRequest: transformRequest}}
	 */
	function HttpRequestInterceptor($log, $httpParamSerializer, $httpParamSerializerJQLike) {

		$log = $log.getInstance('seed.helpers.HttpRequestInterceptor');
		$log.debug('Initiated factory');

		return {
			request: function (request) {
				if (request.params) {
					if (request.url.match(/api\/(v1|v2)/)) {
						request.paramSerializer = $httpParamSerializerJQLike;
					} else {
						request.paramSerializer = $httpParamSerializer;
					}
				}

				return request;
			}
		};
	}

	module.factory('HttpRequestInterceptor', HttpRequestInterceptor);
});
