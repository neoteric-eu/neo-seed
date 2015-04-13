define('layout/module', [
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'angular-templates'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('app.layout', ['ui.router']);
	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {

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
					controller: 'RootController',
					templateUrl: 'app/layout/layout.html',
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'helpers/controllers/RootController'
						])
					}
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	module.run(function ($rootScope, $couchPotato, appMessages) {
		module.lazy = $couchPotato;

		$rootScope.$on('$routeChangeSuccess', function () {
			appMessages.apply();
		});
	});

	return module;
});
