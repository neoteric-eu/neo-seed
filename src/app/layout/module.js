define(
	'layout/module',
[
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
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
							'core/controllers/RootController',
							'auth/directives/neoKeep/neoKeep',
							'auth/directives/neoOmit/neoOmit',
							'auth/services/appMessages'
							//'modules/graphs/directives/inline/sparklineContainer',
							//'components/inbox/directives/unreadMessagesCount',
							//'components/chat/api/ChatApi',
							//'components/chat/directives/asideChatWidget'
						])
					}
				}
			}
		});
		$urlRouterProvider.otherwise('/login');

	});

	module.run(function ($rootScope, $couchPotato, appMessages) {
		module.lazy = $couchPotato;

		$rootScope.$on('$routeChangeSuccess', function () {
			appMessages.apply();
		});
	});

	return module;
});
