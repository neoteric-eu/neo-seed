define([
	'angular',
	'angular-couch-potato',
	'angular-cookie'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('seed.auth.login', []);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('auth.lock', {
				url: '/lock',
				views: {
					auth: {
						templateUrl: 'seed/auth/views/lock/lock.html'
					}
				},
				data: {
					title: 'Locked Screen'
				}
			});
	});

	module.run(function ($log) {

		$log.debug('Initiated module');
	});

	return module;
});
