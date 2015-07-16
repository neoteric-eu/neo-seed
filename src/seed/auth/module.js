define([
	'angular',
	'angular-couch-potato',
	'angular-cookie'
], function (ng, couchPotato) {
	'use strict';

	/**
	 * @class
	 * @memberOf seed.auth
	 */
	var module = ng.module('seed.auth', ['ui.router', 'ipCookie']);

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
						templateUrl: 'app/auth/views/login/login.html'
					}
				},
				data: {
					title: gettext('Login'),
					htmlId: 'extr-page'
				},
				resolve: {
					deps: $couchPotatoProvider.resolveDependencies([
						// Controllers
						'seed/auth/controllers/LoginController',
						// Directives
						'seed/forms/directives/validate/smartValidateForm'
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
						templateUrl: 'app/auth/views/register/register.html'
					}
				},
				data: {
					title: gettext('Register'),
					htmlId: 'extr-page'
				},
				resolve: {
					deps: $couchPotatoProvider.resolveDependencies([
						'seed/auth/controllers/RegisterController',
						'seed/forms/directives/validate/smartValidateForm'
					])
				}
			})

			.state('auth.forgotPassword', {
				url: '/forgot-password',
				views: {
					auth: {
						templateUrl: 'app/auth/views/forgot-password.html'
					}
				},
				data: {
					title: gettext('Forgot Password'),
					htmlId: 'extr-page'
				},
				resolve: {
					deps: $couchPotatoProvider.resolveDependencies([
						'seed/forms/directives/validate/smartValidateForm'
					])
				}
			})

			.state('lock', {
				url: '/lock',
				views: {
					root: {
						templateUrl: 'app/auth/views/lock.html'
					}
				},
				data: {
					title: 'Locked Screen',
					htmlId: 'lock-page'
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
