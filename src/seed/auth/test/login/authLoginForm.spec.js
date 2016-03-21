define([
	'seed/auth/login/forms/login/authLoginForm.html',
	'seed/components/euLogotypes/neoEuLogotypes.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: login', function () {
				describe('directive: authLoginForm', function () {

					var $q, $state, $compile, $timeout, $rootScope, neoSession, LanguageAPI, UserAPI, Permission;

					beforeEach(function () {
						module(function ($provide) {
							$provide.constant('appConf', {
								environmentSettings: {
									predefinedLogins: [{
										login: 'exampleUser',
										password: 'examplePassword'
									}]
								},
								generalSettings: {
									defaultRedirectStateAfterLogin: 'app.dashboard'
								},
								languageSettings: {
									defaultLanguage: {
										name: 'English',
										code: 'gb',
										locale: 'en-GB',
										localePOSIX: 'en_GB'
									}
								}
							});
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							$q = $injector.get('$q');
							$state = $injector.get('$state');
							$compile = $injector.get('$compile');
							$timeout = $injector.get('$timeout');
							$rootScope = $injector.get('$rootScope');
							neoSession = $injector.get('neoSession');
							LanguageAPI = $injector.get('LanguageAPI');
							UserAPI = $injector.get('UserAPI');
							Permission = $injector.get('Permission');
						});
					});

					beforeEach(function () {
						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});
					});

					it('should set user login and password for predefined logins', function () {
						// GIVEN
						var scope = $rootScope.$new();
						var element = $compile('<auth-login-form></auth-login-form>')(scope);
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

					it('should not log in if user has not provided login and email in form', function () {
						// GIVEN
						var scope = $rootScope.$new();
						var element = $compile('<auth-login-form></auth-login-form>')(scope);
						$rootScope.$digest();

						var vm = element.controller('authLoginForm');

						// WHEN
						vm.login();
						$timeout.flush();

						// THEN
						expect($state.current.name).toEqual('');
					});

					it('should navigate by default to selection of profile when successfully logged in with user with multiple profiles', function ($inject) {
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

						var $state = $inject('$state');

						spyOn(neoSession, 'setSession').and.callFake(function () {
							return $q.resolve();
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
						expect($rootScope.user).toBeDefined();
						expect($state.current.name).toEqual('auth.profileSelect');
					});

					it('should redirect by default to defaultRedirectStateAfterLogin when successfully logged in with one profile', function ($injector) {
						// GIVEN
						spyOn(UserAPI, 'login').and.callFake(function () {
							return $q.resolve(UserAPI.build());
						});

						spyOn(neoSession, 'setSession').and.callFake(function () {
							return $q.resolve();
						});

						var appConf = $injector('appConf');

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
						$rootScope.$digest();
						$timeout.flush();

						// THEN
						expect(UserAPI.login).toHaveBeenCalled();
						expect($rootScope.user).toBeDefined();
						expect($state.current.name).toEqual(appConf.generalSettings.defaultRedirectStateAfterLogin);
					});

					//it('should redirect to requestedState if defined when successfully logged in with one profile', function ($injector) {
					//	// GIVEN
					//	spyOn(UserAPI, 'login').and.callFake(function () {
					//		return $q.resolve(UserAPI.build());
					//	});
					//
					//	spyOn(neoSession, 'setSession').and.callFake(function () {
					//		return $q.resolve();
					//	});
					//
					//	var appConf = $injector('appConf');
					//
					//	var scope = $rootScope.$new();
					//	var element = $compile('<auth-login-form></auth-login-form>')(scope);
					//	$rootScope.$digest();
					//	$rootScope.requestedState = 'app.dashboard';
					//
					//	var vm = element.controller('authLoginForm');
					//
					//	vm.user.$extend({
					//		login: 'exampleUser',
					//		password: 'examplePassword'
					//	});
					//
					//	// WHEN
					//	vm.login();
					//	$rootScope.$digest();
					//	$timeout.flush();
					//
					//	// THEN
					//	expect($state.current.name).toEqual('app.dashboard');
					//});

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

