define([
	'seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
	'seed/components/euLogotypes/neoEuLogotypes.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: login', function () {
				describe('directive: authProfileSelectForm', function () {

					var $q, scope, $state, $compile, element, $timeout, UserAPI, LanguageAPI, Permission;

					beforeEach(function () {
						inject(function ($injector) {
							$q = $injector.get('$q');
							$compile = $injector.get('$compile');
							$timeout = $injector.get('$timeout');
							UserAPI = $injector.get('UserAPI');
							LanguageAPI = $injector.get('LanguageAPI');
							$state = $injector.get('$state');
							Permission = $injector.get('Permission');
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							scope = $injector.get('$rootScope').$new();
						});
						element = $compile('<auth-profile-select-form></auth-profile-select-form>')(scope);
					});


					it('should go to auth.login state on init if user is not set', function () {
						//GIVEN
						spyOn(Permission, 'authorize').and.callFake(function () {
							return $q.resolve();
						});

						//WHEN
						scope.$digest();

						//THEN
						expect($state.current.name).toEqual('auth.login');
					});

					it('should set first user customer as activeCustomer from available ones on init ', function () {
						//GIVEN
						var sut = 'exampleCustomer';

						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});

						scope.$root.user = UserAPI.build({
							login: 'exampleUser',
							password: 'examplePassword',
							customers: [sut]
						});

						//WHEN
						scope.$digest();
						var vm = element.controller('authProfileSelectForm');

						//THEN
						expect(vm.activeCustomer).toEqual(sut);
					});

					it('should on click set activeCustomer selected by user', function () {
					});

					it('should on click set activeCustomer selected by user', function () {
					});


					it('should navigate by default to selection of profile when successfully logged in with user with multiple profiles', function () {
						// GIVEN
						//spyOn(UserAPI, 'login').and.callFake(function () {
						//	return $q.resolve(UserAPI.build({
						//		customers: [
						//			{
						//				featureKeys: []
						//			},
						//			{
						//				featureKeys: []
						//			}
						//		]
						//	}));
						//});
						//
						//var $state = $inject('$state');
						//
						//spyOn($state, 'go').and.callFake(function () {
						//	return $q.resolve();
						//});
						//
						//spyOn(neoSession, 'setSession').and.callFake(function () {
						//	return $q.resolve();
						//});
						//
						//var scope = $rootScope.$new();
						//var element = $compile('<auth-login-form></auth-login-form>')(scope);
						//$rootScope.$digest();
						//
						//var vm = element.controller('authLoginForm');
						//vm.user.$extend({
						//	login: 'exampleUser',
						//	password: 'examplePassword'
						//});
						//
						//// WHEN
						//vm.login();
						//$timeout.flush();
						//
						//// THEN
						//expect(UserAPI.login).toHaveBeenCalled();
						//expect($rootScope.user).toBeDefined();
						//expect($state.go).toHaveBeenCalledWith('auth.profileSelect', {}, {notify: true, reload: false});
					});

					it('should redirect by default to defaultRedirectStateAfterLogin when successfully logged in with one profile', function () {
						// GIVEN
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
						//
						//	var vm = element.controller('authLoginForm');
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
						//	expect(UserAPI.login).toHaveBeenCalled();
						//	expect($rootScope.user).toBeDefined();
						//	expect($state.current.name).toEqual(appConf.generalSettings.defaultRedirectStateAfterLogin);
					});

				});
			});
		});
	});
});

