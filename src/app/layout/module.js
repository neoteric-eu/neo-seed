define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'angular-templates'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('app.layout', ['ui.router']);
	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('app', {
			abstract: true,
			data: {
				permissions: {
					only: ['user'],
					redirectTo: 'auth.login'
				}
			},
			views: {
				root: {
					templateUrl: 'app/layout/layout.html'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	module.run(function ($rootScope, $couchPotato, localStorageService, $http) {
		module.lazy = $couchPotato;

		// @todo this is awfully ugly but works at last - refactor logging in
		$rootScope.user = localStorageService.get('user');
		$rootScope.token = localStorageService.get('token');

		if ($rootScope.user) {
			$http.defaults.headers.common['X-Customer-Id'] = localStorageService.get('activeProfile').customerId;
			$http.defaults.headers.common['Authorization'] = 'token ' + $rootScope.token;
		}

	});

	return module;
});
