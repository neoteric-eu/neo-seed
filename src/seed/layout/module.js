define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('seed.layout', ['seed.auth']);
	couchPotato.configureApp(module);

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

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
