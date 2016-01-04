define([
	'angular'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.lock', []);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('auth.lock', {
				url: '/lock',
				views: {
					auth: {
						template: '<auth-lock-form></auth-lock-form>'
					}
				},
				data: {
					title: 'Locked Screen'
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.lock.module');
		$log.debug('Initiated module');
	});

	return module;
});
