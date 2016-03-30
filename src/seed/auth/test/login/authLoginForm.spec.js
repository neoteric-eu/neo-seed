define([
	'seed/auth/login/forms/login/authLoginForm.html',
	'seed/components/euLogotypes/neoEuLogotypes.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: login', function () {
				describe('directive: authLoginForm', function () {

					var $q, scope, $state, $compile, $stateProvider, appConf, $rootScope, element, $timeout, UserAPI, Permission, neoSession;

					beforeEach(function () {
						module('ui.router', function ($injector) {
							$stateProvider = $injector.get('$stateProvider');
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							$q = $injector.get('$q');
							$compile = $injector.get('$compile');
							$timeout = $injector.get('$timeout');
							UserAPI = $injector.get('UserAPI');
							$state = $injector.get('$state');
							Permission = $injector.get('Permission');
							neoSession = $injector.get('neoSession');
							$rootScope = $injector.get('$rootScope');
							appConf = $injector.get('appConf');
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							scope = $injector.get('$rootScope').$new();

							spyOn(Permission, 'authorize').and.callFake(function () {
								return $q.resolve();
							});

							spyOn(neoSession, 'setSession').and.callFake(function () {
								return $q.resolve();
							});

							element = $compile('<auth-login-form></auth-login-form>')(scope);
						});
					});

					it('should set user login and password for predefined logins', function () {
						// GIVEN
						$rootScope.$digest();

						var vm = element.controller('authLoginForm');
						var sut = {
							login: 'exampleUser',
							password: 'examplePassword'
						};
						// WHEN
						vm.loginAs(sut);

						// THEN
						expect(vm.user).toEqual(jasmine.objectContaining(sut));
					});

					it('should not log in if user has not provided login and password in form', function () {
						// GIVEN
						$rootScope.$digest();

						var vm = element.controller('authLoginForm');

						// WHEN
						vm.login();
						$timeout.flush();

						// THEN
						expect($state.current.name).toEqual('');
					});

					it('should navigate by default to selection of profile when successfully logged in with user with multiple profiles', function () {
						// GIVEN
						spyOn(UserAPI, 'login').and.callFake(function () {
							return $q.resolve(UserAPI.build({
								customers: [
									{
										featureKeys: []
									},
									{
										featureKeys: []
									}
								]
							}));
						});

						$rootScope.$digest();

						var vm = element.controller('authLoginForm');

						$stateProvider
							.state('app', {
								abstract: true
							})
							.state('app.dashboard', {
								url: '/dashboard'
							});

						vm.user = {
							login: 'exampleUser',
							password: 'examplePassword'
						};

						// WHEN
						vm.login();
						$timeout.flush();
						$rootScope.$digest();

						// THEN
						expect($state.current.name).toEqual('auth.profileSelect');
					});

					it('should redirect to requestedState if defined when successfully logged in with one profile', function () {
						// GIVEN
						spyOn(UserAPI, 'login').and.callFake(function () {
							return $q.resolve(UserAPI.build({
									customers: [
										{
											featureKeys: []
										}
									]
								}
							));
						});

						$rootScope.$digest();

						var vm = element.controller('authLoginForm');
						scope.$root.requestedState = {
							toState: 'app.dashboard'
						};

						$stateProvider
							.state('app', {
								abstract: true
							})
							.state('app.dashboard', {
								url: '/dashboard'
							});

						vm.user = {
							login: 'exampleUser',
							password: 'examplePassword'
						};

						// WHEN
						vm.login();
						$timeout.flush();
						$rootScope.$digest();

						// THEN
						expect($state.current.name).toEqual('app.dashboard');
					});


					it('should redirect by default to defaultRedirectStateAfterLogin when successfully logged in with one profile', function () {
						// GIVEN
						spyOn(UserAPI, 'login').and.callFake(function () {
							return $q.resolve(UserAPI.build({
								customers: []
							}));
						});

						$stateProvider
							.state('app', {
								abstract: true
							})
							.state('app.dashboard', {
								url: '/dashboard'
							});

						$rootScope.$digest();
						var vm = element.controller('authLoginForm');
						vm.user = {
							login: 'exampleUser',
							password: 'examplePassword'
						};

						// WHEN
						vm.login();
						$timeout.flush();
						$rootScope.$digest();

						// THEN
						expect($state.current.name).toEqual(appConf.generalSettings.defaultRedirectStateAfterLogin);
					});

					it('should show form error when login is rejected', function () {
						// GIVEN
						spyOn(UserAPI, 'login').and.callFake(function () {
							return $q.reject();
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-login-form></auth-login-form>')(scope);
						$rootScope.$digest();

						var vm = element.controller('authLoginForm');

						vm.user.$extend({
							login: 'exampleUser',
							password: 'examplePassword'
						});

						// WHEN
						vm.login();
						$timeout.flush();

						// THEN
						expect(UserAPI.login).toHaveBeenCalled();
						expect(vm.formError).toBeTruthy();
					});
				});
			});
		});
	});
});

