define([
	'seed/auth/login/forms/login/authLoginForm.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: login', function () {
				describe('directive: authLoginForm', function () {

					var $compile, $rootScope, LanguageAPI;

					beforeEach(function () {
						module(function ($provide) {
							$provide.constant('appConf', {
								environmentSettings: {
									predefinedLogins: [{
										login: 'exampleUser',
										password: 'examplePassword'
									}]
								}
							});
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							$compile = $injector.get('$compile');
							$rootScope = $injector.get('$rootScope');
							LanguageAPI = $injector.get('LanguageAPI');
						});
					});

					//it('should set user login and password for predefined logins', function () {
					//	// GIVEN
					//	spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
					//		return {localePOSIX: 'en_GB'};
					//	});
					//
					//	var scope = $rootScope.$new();
					//	var element = $compile('<auth-login-form></auth-login-form>')(scope);
					//	$rootScope.$digest();
					//
					//	var vm = element.controller('authLoginForm');
					//	var sut = {
					//		login: 'exampleUser',
					//		password: 'examplePassword'
					//	};
					//	// WHEN
					//	vm.loginAs(sut);
					//
					//	// THEN
					//	expect(vm.user).toEqual(sut);
					//});

					//it('should return error when rejected registration', function () {
					//	// GIVEN
					//	var mockedError = 'Tragical error';
					//
					//	spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
					//		return {localePOSIX: 'en_GB'};
					//	});
					//
					//	var scope = $rootScope.$new();
					//	var element = $compile('<auth-register-form></auth-register-form>')(scope);
					//	$rootScope.$digest();
					//	$timeout.flush();
					//
					//	var vm = element.controller('authRegisterForm');
					//
					//	// WHEN
					//	vm.register();
					//	$rootScope.$digest();
					//
					//	// THEN
					//	expect(vm.registrationError).toBe(mockedError);
					//});
				});
			});
		});
	});
});

