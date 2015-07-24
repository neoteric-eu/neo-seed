define(['seed/module'], function (app) {
	'use strict';

	/**
	 * Handles globally server error exceptions
	 * @method HttpErrorInterceptor
	 * @param $q {Object} Angular promise provider
	 * @param $exceptionHandler {Function} Exception handler
	 * @param appConf {Object} Application configuration settings
	 * @return {{requestError: Function, responseError: Function}}
	 */
	function HttpErrorInterceptor($q, $injector, $exceptionHandler, appConf) {

		function notifyError(rejection) {
			if (appConf.sentrySettings.apiKey) {
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
			requestError: function (rejection) {
				// show notification
				notifyError(rejection);

				// Return the promise rejection.
				return $q.reject(rejection);
			},

			// On response failure
			responseError: function (rejection) {

				// show notification
				notifyError(rejection);

				if (rejection.status === 401) {
					// If user is not authorised redirect to login page
					$injector.get('$state').go('auth.logout');
					return $q.reject(rejection);
				} else {
					// Return the promise rejection.
					return $q.reject(rejection);
					//}
				}
			}
		};
	}

	app.factory('HttpErrorInterceptor', HttpErrorInterceptor);
});
