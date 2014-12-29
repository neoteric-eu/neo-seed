'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */
define([
	'angular',
	'angular-couch-potato',
	'globalSettings',
	'angular-resource',
	'angular-ui-router',
	'angular-sanitize',
	'angular-animate',
	'angular-bootstrap',
	'angular-gettext',
	'angular-cookie',
	'angular-permission',
	'angular-moment',
	'smartwidgets',
	'notification',
	'angular-templates',
	'angular-logx'
], function (ng, couchPotato, globalSettings) {

	var app = ng.module('app', [
		'ngSanitize',
		'ngResource',
		'gettext',
		'permission',
		'angularMoment',

		'scs.couch-potato',
		'ngAnimate',
		'ui.router',
		'ui.bootstrap',
		'mindspace.logX',

		// App modules
		'app.auth',
		'app.layout',
		'app.miniCore',
		'app.forms',
		'app.templates',
		'app.miniTemplate',
		'app.dashboard'
	]);

	couchPotato.configureApp(app);

	app.config(function (
		$provide,
		$httpProvider,
		$locationProvider,
		$logProvider
	) {

		$locationProvider.html5Mode(globalSettings.get('MOD_REWRITE'));
		$logProvider.debugEnabled(globalSettings.get('DEBUG'));

		// Intercept http calls.
		$provide.factory('ErrorHttpInterceptor', function ($q, $log, $exceptionHandler) {
			function notifyError(rejection) {
				$log.error(rejection);
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
					// Return the promise rejection.
					return $q.reject(rejection);
				}
			};
		});

		// Add the interceptor to the $httpProvider.
		$httpProvider.interceptors.push('ErrorHttpInterceptor');

		$provide.decorator('$state', function ($delegate, $stateParams) {
			$delegate.reload = function () {
				return $delegate.go($delegate.current, $stateParams, {
					reload: true,
					inherit: false,
					notify: true
				});
			};
			return $delegate;
		});

		$provide.factory('HttpResponseInterceptor', function ($templateCache, Permission) {
			// Keep track which HTML templates have already been modified.
			var modifiedTemplates = {};

			// Tests if there are any keep/omit attributes.
			var HAS_FLAGS_EXP = /data-(keep|omit)/;

			// Tests if the requested url is a html page.
			var IS_HTML_PAGE = /\.html$|\.html\?/i;

			return {
				'response': function(response) {
					var url = response.config.url,
						responseData = response.data;

					if (!modifiedTemplates[url] && IS_HTML_PAGE.test(url) &&
						HAS_FLAGS_EXP.test(responseData)) {

						// Create a DOM fragment from the response HTML.
						var template = $('<div>').append(responseData);

						// Find and parse the keep/omit attributes in the view.
						template.find('[data-keep],[data-omit]').each(function() {
							var element = $(this),
								data = element.data(),
								keep = !!data.keep,
								features = data.keep || data.omit || '';

							// Check if the user has all of the specified features.
							var hasFeature = !!Permission.hasPermission(features.split(','));

							/* jshint bitwise: false */
							if (features.length && (keep ^ hasFeature)) {
								element.remove();
							}
						});

						// Set the modified template.
						response.data = template.html();

						// Replace the template in the template cache, and mark the
						// template as modified.
						$templateCache.put(url, response.data);
						modifiedTemplates[url] = true;
					}

					return response;
				}
			};
		});

		$httpProvider.interceptors.push('HttpResponseInterceptor');
	});

	app.run(function (
		$couchPotato,
		$rootScope,
		$state,
		$stateParams,
		gettextCatalog,
		session,
		$urlRouter
	) {

		app.lazy = $couchPotato;
		$rootScope.appReady = false;
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		gettextCatalog.debug = globalSettings.get('DEBUG');
		session.setLocale();

		$rootScope.$on('$locationChangeSuccess', function(evt) {
			evt.preventDefault();
			if(!$rootScope.appReady){
				$urlRouter.sync();
			}
		});

		$rootScope.$on('$stateChangeStart', function () {
			$rootScope.appReady = true;
		});
	});

	return app;
});
