/**
 * @namespace seed.auth
 * @memberOf seed
 */

define([
	'angular',
	'angular-cookies',
	'angular-permission'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth', [
		'permission',
		'ngCookies',
		'seed.auth.login',
		'seed.auth.register',
		'seed.auth.password',
		'seed.auth.lock'
	]);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('auth', {
				abstract: true,
				views: {
					root: {
						templateUrl: 'seed/auth/views/view.html'
					}
				}
			})

			.state('auth.logout', {
				url: '/logout',
				data: {
					permissions: {
						only: ['AUTHORIZED'],
						redirectTo: 'auth.login'
					}
				},
				views: {
					auth: {
						controller: function ($rootScope, $state, UserAPI, neoSession) {
							UserAPI
								.logout($rootScope.user)
								.then(function () {
									neoSession
										.clearSession()
										.finally(function () {
											$state.go('auth.login');
										});
								});
						}
					}
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.module');

		$log.debug('Initiated module');
	});

	return module;
});
