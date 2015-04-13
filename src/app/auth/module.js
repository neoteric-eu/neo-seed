define([
	'angular',
	'angular-couch-potato',
	'angular-templates'
], function (ng, couchPotato) {
	'use strict';

	/**
	 * @class
	 * @memberOf app.auth
	 */
	var module = ng.module('app.auth', [
		'ipCookie',
		'ui.router'
	]);

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
						'auth/controllers/LoginController',
						// Directives
						'modules/forms/directives/validate/smartValidateForm'
					])
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
						'auth/controllers/RegisterController',
						'modules/forms/directives/validate/smartValidateForm'
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
						'modules/forms/directives/validate/smartValidateForm'
					])
				}
			});
	});

	module.run(function ($couchPotato, $state, Permission, session) {
		module.lazy = $couchPotato;

		Permission.defineRole('user', function () {
			return session.checkSession();
		});
	});
	return module;
});
