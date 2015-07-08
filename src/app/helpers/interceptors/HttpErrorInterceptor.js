define(['app', 'globalSettings'], function (app, globalSettings) {
	'use strict';

	/**
	 * Handles globally server error exceptions
	 * @method HttpErrorInterceptor
	 * @param $q {Object} Angular promise provider
	 * @param $exceptionHandler {Function} Exception handler
	 * @return {{requestError: Function, responseError: Function}}
	 */
	function HttpErrorInterceptor($q, $exceptionHandler) {

		/**
		 * Description
		 * @method notifyError
		 * @param {} rejection
		 */
		function notifyError(rejection) {
			if (globalSettings.get('SENTRY_API_KEY')) {
				var exception = {
					message: rejection.data,
					method: rejection.config.method,
					headers: rejection.config.header,
					url: rejection.config.url,
					data: rejection.data,
					status: rejection.status
				};

				$exceptionHandler(exception);
			}
		}

		return {
			// On request failure
			/**
			 * Description
			 * @method requestError
			 * @param {} rejection CallExpression
			 */
			requestError: function (rejection) {
				// show notification
				notifyError(rejection);

				// Return the promise rejection.
				return $q.reject(rejection);
			},

			// On response failure
			/**
			 * Description
			 * @method responseError
			 * @param {} rejection CallExpression
			 */
			responseError: function (rejection) {
				// show notification
				notifyError(rejection);
				// Return the promise rejection.
				return $q.reject(rejection);
			}
		};
	}

	app.registerFactory('HttpErrorInterceptor', HttpErrorInterceptor);
});
