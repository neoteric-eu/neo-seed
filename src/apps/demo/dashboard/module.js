define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'angular-resource'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.demo.dashboard', [
		'ui.router',
		'ngResource'
	]);

	module.config(function ($stateProvider, $couchPotatoProvider) {
		$stateProvider
			.state('app.demo.dashboard', {
				url: '/dashboard',
				views: {
					"content@app": {
						controller: 'DashboardCtrl',
						templateUrl: 'apps/demo/dashboard/dashboard.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/dashboard/DashboardCtrl',
								'apps/demo/modules/graphs/directives/inline/sparklineContainer',
								'apps/demo/modules/graphs/directives/inline/easyPieChartContainer',
								'apps/demo/components/chat/directives/chatWidget',
								'apps/demo/components/chat/directives/chatUsers',
								'apps/demo/modules/graphs/directives/vectormap/vectorMap',
								'apps/demo/modules/graphs/directives/flot/flotBasic'
							])
						}
					}
				},
				data: {
					title: 'Dashboard'
				}
			});
	});

	couchPotato.configureApp(module);

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
