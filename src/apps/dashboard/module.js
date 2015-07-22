define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('app.dashboard', []);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.dashboard', {
				url: '/dashboard',
				views: {
					'content@app': {
						templateUrl: 'apps/dashboard/views/dashboard.html'
					}
				}
			});
	});

	return module;
});
