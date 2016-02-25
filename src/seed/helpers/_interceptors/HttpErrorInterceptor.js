define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Handles globally server error exceptions
	 * @class HttpErrorInterceptor
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @param $q {Object} Angular promise provider
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{responseError: Function}}
	 */
	function HttpErrorInterceptor($log, $q, $injector) {

		$log = $log.getInstance('seed.helpers.HttpErrorInterceptor');
		$log.debug('Initiated factory');

		return {
			// On response failure
			responseError: function (rejection) {
				if (rejection.status === 401) {
					// If user is not authorised redirect to login page
					$injector.get('$state').go('auth.logout');

					$log.debug('Intercepted authorised access');

					return $q.reject(rejection);
				} else {

					$log.debug('Intercepted response error');
					// Return the promise rejection.
					return $q.reject(rejection);
					//}
				}
			}
		};
	}

	module.factory('HttpErrorInterceptor', HttpErrorInterceptor);
});
