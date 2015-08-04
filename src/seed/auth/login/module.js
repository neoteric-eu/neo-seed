define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.login', []);

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
						template: '<auth-profile-select-form></auth-profile-select-form>'
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
