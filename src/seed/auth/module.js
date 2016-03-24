/**
 * @namespace seed.auth
 * @memberOf seed
 */

define([
	'angular',
	'moment',
	'moment-timezone',
	'angular-moment',
	'angular-cookies',
	'angular-gettext',
	'angular-ui-router',
	'angular-restmod',
	'angular-permission'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth', [
		// libs
		'angularMoment',
		'ngCookies',
		'ui.router',
		'gettext',
		'restmod',
		'permission',
		// seed modules
		'seed.templateCache',
		'seed.helpers',
		'seed.components',
		'seed.forms',
		// sub-modules
		'seed.auth.login',
		'seed.auth.register',
		'seed.auth.password',
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

	module.run(function ($log, neoLanguage) {
		$log = $log.getInstance('seed.auth');
		$log.debug('Initiated module');

		neoLanguage.init();
	});

	return module;
});
