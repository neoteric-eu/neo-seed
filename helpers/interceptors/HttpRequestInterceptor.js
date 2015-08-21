define(['seed/helpers/module'], function (app) {
	'use strict';

	/**
	 * Provides object serialization to url parameters
	 * @class HttpRequestInterceptor
	 *
	 * @param $log {Object} Logging service
	 * @return {{request: Function}}
	 */
	function HttpRequestInterceptor($log) {

		$log = $log.getInstance('seed.helpers.HttpRequestInterceptor');
		$log.debug('Initiated factory');

		return {
			request: function (config) {
				var uri = config.url;

				//Serialize query string parameters in a way the web API understands.
				if (config.params) {
					var serializedParams;

					try {
						serializedParams = $.param(config.params, false);
					} catch (e) {
						$log.error('Error serializing request params: ' + _.stringify(config.params));
					}
					// Append it to request url
					if (serializedParams) {
						uri = uri + '?' + serializedParams;
					}
					// Prevent angular do that
					config.params = null;
				}

				config.url = uri;
				return config;
			}
		};
	}

	app.factory('HttpRequestInterceptor', HttpRequestInterceptor);
});
