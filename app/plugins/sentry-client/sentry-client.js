/**
 *	@name sentryClient
 *	@description Logging Client Side Errors with Raven-js to the Sentry.
 *
 *	@author Jakub Mach @Budmore
 *	@version v1.4-custom
 *	@date 23 April 2014
 *
 *	http://raven-js.readthedocs.org/en/latest
 */

define(['angular', 'globalSettings', 'raven-js', 'ravenInstall'],
function(angular, globalSettings) {
	'use strict';
	angular.module('sentryClient', []).factory('$exceptionHandler', ['$window', '$log',
		function ($window, $log) {

			return function (exception, cause) {
				if (!globalSettings.get('DEBUG') && $window.Raven) {
					// Default error handler - display error in the console
					$log.error.apply($log, arguments);

					var href = $window.location.href;
					var viewport = $window.innerWidth + 'x' + $window.innerHeight;

					$window.Raven.captureException( exception, {
						tags: {
							Viewport: viewport,
							Href: href,
						},
						extra: {
							Href: href,
							Cause: cause,
							Status: exception.status,
							Data: exception.data,
							Method: exception.method,
							CustomerId: exception.headers
						}
					});

				} else {
					// Default error handler
					$log.error.apply($log, arguments);
				}
			};
		}
	]);
});
