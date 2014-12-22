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
	'smartwidgets',
	'notification',
	'angular-templates'
], function (ng, couchPotato, globalSettings) {

	var app = ng.module('app', [
		'ngSanitize',
		'ngResource',
		'gettext',

		'scs.couch-potato',
		'ngAnimate',
		'ui.router',
		'ui.bootstrap',

		// App modules
		// 'layout',
		'app.miniCore',
		'app.auth',
		'app.forms',
		'app.templates',
		'app.miniTemplate'
	]);

	couchPotato.configureApp(app);

	app.config(function ($provide, $httpProvider, $locationProvider) {

		$locationProvider.html5Mode(globalSettings.get('MOD_REWRITE'));

		// Intercept http calls.
		$provide.factory('ErrorHttpInterceptor', function ($q) {
			var errorCounter = 0;

			function notifyError(rejection) {
				console.log(rejection);
				$.bigBox({
					title: rejection.status + ' ' + rejection.statusText,
					content: rejection.data,
					color: '#C46A69',
					icon: 'fa fa-warning shake animated',
					number: ++errorCounter,
					timeout: 6000
				});
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

	});

	app.run(function ($couchPotato, $rootScope, $state, $stateParams) {
		app.lazy = $couchPotato;
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		// editableOptions.theme = 'bs3';
	});

	return app;
});
