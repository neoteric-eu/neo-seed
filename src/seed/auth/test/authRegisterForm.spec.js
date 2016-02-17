define([
	'angular',
	'angular-mocks',
	'angular-moment',
	'angular-restmod',
	'seed/auth/_includes',
	'seed/auth/module',
	'seed/helpers/_includes',
	'seed/helpers/module',
	'seed/components/_includes',
	'seed/components/module',
	'seed/auth/register/forms/register/authRegisterForm.html',
	'seed/auth/views/view.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('directive: authRegisterForm', function () {

				var $compile, $rootScope, $state, $q, UserAPI, LanguageAPI;

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

					module('ui.router', 'angularMoment', 'restmod', 'gettext',
						'seed.templates', 'seed.helpers', 'seed.components',
						'seed.auth');
				});


				beforeEach(function () {
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$state = $injector.get('$state');
						$rootScope = $injector.get('$rootScope');
						$q = $injector.get('$q');
						UserAPI = $injector.get('UserAPI');
						LanguageAPI = $injector.get('LanguageAPI');
					});
				});

				it('should navigate to login page after successful registration', function () {
					// GIVEN
					spyOn(UserAPI, 'register').and.callFake(function () {
						return $q.resolve();
					});

					spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
						return {localePOSIX: 'en_GB'};
					});

					var scope = $rootScope.$new();
					var element = $compile('<auth-register-form></auth-register-form>')(scope);
					$rootScope.$digest();

					var vm = element.controller('authRegisterForm');
					vm.registrationForm.$valid = true;

					// WHEN
					vm.register();
					$rootScope.$digest();

					// THEN
					expect($state.current.name).toEqual('auth.login');
				});

				it('should return error when rejected registration', function () {
					// GIVEN
					var mockedError = 'Tragical error';
					spyOn(UserAPI, 'register').and.callFake(function () {
						return $q.reject(mockedError);
					});

					spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
						return {localePOSIX: 'en_GB'};
					});

					var scope = $rootScope.$new();
					var element = $compile('<auth-register-form></auth-register-form>')(scope);
					$rootScope.$digest();

					var vm = element.controller('authRegisterForm');
					vm.registrationForm.$valid = true;

					// WHEN
					vm.register();
					$rootScope.$digest();

					// THEN
					expect(vm.registrationError).toBe(mockedError);
					expect(vm.registrationForm.$submitted).toBeFalsy();
				});
			});
		});
	});
});

