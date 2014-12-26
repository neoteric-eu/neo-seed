define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'angular-gettext',
	'angular-google-plus',
	'angular-easyfb'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('app.auth', [
		'ui.router'
	]);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {

		$stateProvider.state('auth', {
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
		}).state('auth.login', {
			url: '/login',
			views: {
				auth: {
					templateUrl: 'app/auth/views/login.html'
				}
			},
			data: {
				title: 'Login',
				htmlId: 'extr-page'
			},
			resolve: {
				deps: $couchPotatoProvider.resolveDependencies([
					'modules/miniCore/directives/neoLoginForm/neoLoginForm',
					'modules/forms/directives/validate/smartValidateForm'
				])
			}
		}).state('auth.register', {
			url: '/register',
			views: {
				root: {
					templateUrl: 'app/auth/views/register.html'
				}
			},
			data: {
				title: 'Register',
				htmlId: 'extr-page'
			},
			resolve: {
				deps: $couchPotatoProvider.resolveDependencies([
					'modules/forms/directives/validate/smartValidateForm'
				])
			}
		}).state('auth.forgotPassword', {
			url: '/forgot-password',
			views: {
				root: {
					templateUrl: 'app/auth/views/forgot-password.html'
				}
			},
			data: {
				title: 'Forgot Password',
				htmlId: 'extr-page'
			},
			resolve: {
				deps: $couchPotatoProvider.resolveDependencies([
					'modules/forms/directives/validate/smartValidateForm'
				])
			}
		});
	});

	module.run(function($couchPotato, $state, Permission, session) {
		module.lazy = $couchPotato;

		Permission.defineRole('anonymous', function() {
			return true;
		}).defineRole('user', function() {
			return session.checkSession();
		});
	});
	return module;
});
