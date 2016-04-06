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
		'permission',
		'gettext',
		'restmod',
		// seed modules
		'seed.templateCache',
		'seed.helpers',
		'seed.components',
		'seed.forms',
		// sub-modules
		'seed.auth.login',
		'seed.auth.register',
		'seed.auth.password'
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
				onEnter: function ($rootScope, $state, UserAPI, neoSession) {
					UserAPI
						.logout($rootScope.user)
						.finally(function () {
							return neoSession.clearSession();
						})
						.finally(function () {
							$state.go('auth.login');
						});
				}

			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth');
		$log.debug('Initiated module');
	});

	return module;
});
