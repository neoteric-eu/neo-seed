define(
	'miniTemplate/module',
[
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('app.miniTemplate', ['ui.router']);
	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.miniTemplate', {
				abstract: true,
				views: {
					root: {
						templateUrl: 'app/modules/miniTemplate/views/login-page.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								//'auth/directives/loginInfo',
								'modules/graphs/directives/inline/sparklineContainer',
								'components/inbox/directives/unreadMessagesCount',
								'components/chat/api/ChatApi',
								'components/chat/directives/asideChatWidget'
							])
						}
					}
				}
			});
		/*$urlRouterProvider
			.when('/start', {templateUrl: PATH_MINITEMPLATE + 'views/example.html', access: 'SM_USER_GET'})
			.when('/login', {
				templateUrl: PATH_MINITEMPLATE + 'views/login-page.html',
				access: 'ONLY_NOT_LOGGED'
			})
			.when('/password/reset', {
				templateUrl: PATH_MINITEMPLATE + '/views/password/reset.html',
				access: 'ONLY_NOT_LOGGED'
			})
			.when('/password/reset/:token', {
				templateUrl: PATH_MINITEMPLATE + '/views/password/new.html',
				access: 'ONLY_NOT_LOGGED'
			})
			.otherwise({redirectTo: '/start'});*/

		//$urlRouterProvider.otherwise('/login');
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
