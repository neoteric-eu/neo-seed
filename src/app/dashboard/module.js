define(
	'dashboard/module',
[
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'angular-resource',
	'angular-gettext',
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.dashboard', [
		'ui.router',
		'ngResource',
		'gettext'
	]);

	module.config(function ($stateProvider, $couchPotatoProvider) {
		$stateProvider
			.state('app.dashboard', {
				url: '/dashboard',
				views: {
					'content@app': {
						controller: 'DashboardCtrl as dashboard',
						templateUrl: 'app/dashboard/views/dashboard.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'dashboard/controllers/DashboardCtrl'
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
