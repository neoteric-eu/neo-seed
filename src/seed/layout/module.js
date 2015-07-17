define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('seed.layout', ['ui.router']);
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
					templateUrl: 'apps/layout/layout.html'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	module.run(function ($rootScope, $couchPotato) {
		module.lazy = $couchPotato;

		//$http.defaults.headers.common['X-Customer-Id'] = ipCookie('activeCustomer').customerId;
		//$http.defaults.headers.common['Authorization'] = 'token ' + ipCookie('token');
	});

	return module;
});
