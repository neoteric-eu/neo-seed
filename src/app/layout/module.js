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
							'modules/miniCore/controllers/RootController',
							'modules/miniCore/directives/neoKeep/neoKeep',
							'modules/miniCore/directives/neoOmit/neoOmit',
							'modules/miniCore/services/appMessages'
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
			console.log('hello');
		});
	});

	return module;
});
