/**
 * @namespace seed.auth
 * @memberof seed
 */

define([
	'angular',
	'angular-cookies',
	'angular-hotkeys'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth', [
		'ngCookies',
		'cfp.hotkeys',
		'seed.auth.login',
		'seed.auth.lock'
	]);

	module.config(function ($stateProvider, appConf) {

		$stateProvider
			.state('auth', {
				abstract: true,
				data: {
					permissions: {
						except: ['AUTHORIZED'],
						redirectTo: appConf.generalSettings.defaultStateToRedirectAfterLogin
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
									neoSession.clearSession();
									$state.go('auth.login');
								});
						}
					}
				}
			});
	});

	module.run(function ($log, $rootScope, $state, hotkeys, UserAPI, neoSession) {

		$log = $log.getInstance('seed.auth.module');

		// Bound globally shortcut to lock screen
		hotkeys.add({
			combo: 'alt+l',
			description: 'Lock screen',
			callback: function () {
				UserAPI
					.logout($rootScope.user)
					.then(function () {
						neoSession.clearSession();
						$state.go('auth.lock');
					});
			}
		});

		$log.debug('Initiated module');
	});

	return module;
});
