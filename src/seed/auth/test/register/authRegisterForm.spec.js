define([
	'angular',
	'angular-mocks',
	'angular-moment',
	'angular-restmod',
	'angular-permission',
	'seed/auth/_includes',
	'seed/auth/module',
	'seed/helpers/_includes',
	'seed/helpers/module',
	'seed/components/_includes',
	'seed/components/module',
	'seed/forms/_includes',
	'seed/forms/module',
	'seed/auth/register/forms/register/authRegisterForm.html',
	'seed/auth/views/view.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: register', function () {
				describe('directive: authRegisterForm', function () {

					var $compile, $rootScope, $state, $timeout, $q, neoSession, UserAPI, LanguageAPI;

					beforeEach(function () {
						module(function ($provide) {
							$provide.constant('appConf', {
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

						module(
							'permission', 'ui.router', 'angularMoment', 'restmod', 'gettext',
							'seed.templateCache', 'seed.forms', 'seed.helpers', 'seed.components',
							'seed.auth');
					});

					beforeEach(function () {
						inject(function ($injector) {
							$compile = $injector.get('$compile');
							$state = $injector.get('$state');
							$rootScope = $injector.get('$rootScope');
							$q = $injector.get('$q');
							$timeout = $injector.get('$timeout');
							neoSession = $injector.get('neoSession');
							UserAPI = $injector.get('UserAPI');
							LanguageAPI = $injector.get('LanguageAPI');
						});
					});

					it('should navigate to login page after successful registration', function () {
						// GIVEN
						spyOn(UserAPI, 'register').and.callFake(function () {
							return $q.resolve({
								customers: []
							});
						});

						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});

						spyOn(neoSession, 'setSession').and.callFake(function () {
							return $q.resolve();
						});

						spyOn($state, 'go').and.callFake(function (state) {
							return $q.resolve(state);
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-register-form></auth-register-form>')(scope);
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authRegisterForm');

						// WHEN
						vm.register();
						$rootScope.$digest();

						// THEN
						expect($state.go).toHaveBeenCalledWith('app.dashboard');
					});

					it('should return error when rejected registration', function () {
						// GIVEN
						var mockedError = 'Tragical error';

						spyOn(UserAPI, 'register').and.callFake(function () {
							return $q.reject({
								$response: {
									data: {
										message: mockedError
									}
								}
							});
						});

						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-register-form></auth-register-form>')(scope);
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authRegisterForm');

						// WHEN
						vm.register();
						$rootScope.$digest();

						// THEN
						expect(vm.registrationError).toBe(mockedError);
					});
				});
			});
		});
	});
});
