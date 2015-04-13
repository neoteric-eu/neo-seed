define(['app'], function (app) {
	'use strict';

	/**
	 * Provides object serialization to url parameters
	 * @constructor
	 * @method HttpRequestInterceptor
	 * @return ObjectExpression
	 */
	function HttpRequestInterceptor() {
		return {
			/**
			 * Description
			 * @method request
			 * @param {} config config
			 */
			request: function (config) {
				var uri = config.url;

				//Serialize query string parameters in a way the web API understands.
				if (config.params) {
					var serializedParams = $.param(config.params, false);
					// Append it to request url
					uri = uri + '?' + serializedParams;
					// Prevent angular do that
					config.params = null;
				}

				config.url = uri;
				return config;
			}
		};
	}

	app.registerFactory('HttpRequestInterceptor', HttpRequestInterceptor);
});
