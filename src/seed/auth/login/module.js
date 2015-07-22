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
			.state('auth.login', {
				url: '/login',
				views: {
					auth: {
						template: '<auth-login-form></auth-login-form>'
					}
				}
			})

			.state('auth.profileSelect', {
				url: '/login/profile',
				views: {
					auth: {
						template: '<auth-profile-select-form redirect-to-state="app.dashboard"></auth-profile-select-form>'
					}
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.login.module');

		$log.debug('Initiated module');
	});

	return module;
});
