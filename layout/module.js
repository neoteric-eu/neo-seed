define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.layout', ['seed.auth', 'app']);

	module.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('app', {
			abstract: true,
			data: {
				permissions: {
					only: ['user'],
					redirectTo: 'auth.login.loginForm'
				}
			},
			views: {
				root: {
					templateUrl: 'seed/layout/layout.html'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	return module;
});
