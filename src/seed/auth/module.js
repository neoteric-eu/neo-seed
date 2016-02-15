/**
 * @namespace seed.auth
 * @memberOf seed
 */

define([
	'angular',
	'angular-cookies'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth', [
		'ngCookies',
		'seed.auth.login',
		'seed.auth.register',
		'seed.auth.lock'
	]);

	module.config(function ($stateProvider, appConf) {

		$stateProvider
			.state('auth', {
				abstract: true,
				data: {
					permissions: {
						except: ['AUTHORIZED'],
						redirectTo: appConf.generalSettings.defaultRedirectStateAfterLogin
					}
				},
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
