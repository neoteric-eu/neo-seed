define([
	'angular',
	'angular-couch-potato',
	'angular-cookie'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('seed.auth', ['ipCookie', 'seed.forms', 'neo.dashboard']);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider, gettext) {

		$stateProvider
			.state('auth', {
				abstract: true,
				data: {
					permissions: {
						except: ['user'],
						redirectTo: 'app.dashboard'
					}
				},
				views: {
					root: {
						template: '<div data-ui-view="auth"></div>'
					}
				}
			})

			.state('auth.login', {
				url: '/login',
				views: {
					auth: {
						controller: 'LoginController',
						templateUrl: 'seed/auth/views/login/login.html'
					}
				},
				data: {
					title: gettext('Login')
				},
				resolve: {
					deps: $couchPotatoProvider.resolveDependencies([
						// Controllers
						'seed/auth/controllers/LoginController',
					])
				}
			})

			.state('auth.logout', {
				url: '/logout',
				data: {
					permissions: {
						only: ['user'],
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
			})

			.state('auth.register', {
				url: '/register',
				views: {
					auth: {
						controller: 'RegisterController',
						templateUrl: 'seed/auth/views/register/register.html'
					}
				},
				data: {
					title: gettext('Register')
				},
				resolve: {
					deps: $couchPotatoProvider.resolveDependencies([
						'seed/auth/controllers/RegisterController'
					])
				}
			})

			.state('auth.forgotPassword', {
				url: '/forgot-password',
				views: {
					auth: {
						templateUrl: 'seed/auth/views/forgot-password.html'
					}
				},
				data: {
					title: gettext('Forgot Password'),
					htmlId: 'extr-page'
				}
			})

			.state('lock', {
				url: '/lock',
				views: {
					root: {
						templateUrl: 'seed/auth/views/lock.html'
					}
				},
				data: {
					title: 'Locked Screen'
				}
			});
	});

	module.run(function ($couchPotato, $rootScope, Permission, neoSession) {

		module.lazy = $couchPotato;

		Permission.defineRole('user', function () {
			return neoSession.checkSession();
		});
	});
	return module;
});
