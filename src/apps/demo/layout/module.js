define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.layout', ['ui.router']);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {


		$stateProvider
			.state('apps/demo/module', {
				abstract: true,
				views: {
					root: {
						templateUrl: 'apps/demo/layout/layout.tpl.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/auth/directives/loginInfo',
								'apps/demo/modules/graphs/directives/inline/sparklineContainer',
								'apps/demo/components/inbox/directives/unreadMessagesCount',
								'apps/demo/components/chat/api/ChatApi',
								'apps/demo/components/chat/directives/asideChatWidget'
							])
						}
					}
				}
			});

		$urlRouterProvider.otherwise('/dashboard');

	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
