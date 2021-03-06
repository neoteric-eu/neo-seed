define([
	'seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
	'seed/components/euLogotypes/neoEuLogotypes.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: login', function () {
				describe('directive: authProfileSelectForm', function () {

					var $q, scope, $state, $compile, $stateProvider, appConf, $rootScope, element, $timeout, UserAPI, Authorization, neoSession;

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
							Authorization = $injector.get('Authorization');
							neoSession = $injector.get('neoSession');
							$rootScope = $injector.get('$rootScope');
							appConf = $injector.get('appConf');
						});
					});

					beforeEach(function () {
						inject(function ($injector) {
							scope = $injector.get('$rootScope').$new();
						});
						element = $compile('<auth-profile-select-form></auth-profile-select-form>')(scope);
					});

					beforeEach(function () {

						scope.$root.user = UserAPI.build({
							login: 'exampleUser',
							password: 'examplePassword'
						});

						spyOn(Authorization, 'authorize').and.callFake(function () {
							return $q.resolve();
						});
						spyOn(neoSession, 'setSession').and.callFake(function () {
							return $q.resolve();
						});
					});


					it('should go to auth.login state on init if user is not set', function () {
						//GIVEN
						//WHEN
						scope.$digest();

						//THEN
						expect($state.current.name).toEqual('auth.login');
					});

					it('should set first user customer as activeCustomer from available ones on init ', function () {
						//GIVEN
						var sut = 'exampleCustomer';

						scope.$root.user.$extend({
							customers: [sut]
						});

						//WHEN
						scope.$digest();
						var vm = element.controller('authProfileSelectForm');

						//THEN
						expect(vm.activeCustomer).toEqual(sut);
					});

					it('should on click set activeCustomer selected by user', function () {
						//GIVEN
						var sut = 'customer2';

						scope.$root.user.$extend({
							customers: ['customer1', sut]
						});

						//WHEN
						scope.$digest();
						var vm = element.controller('authProfileSelectForm');
						vm.setCustomerActive(sut);

						//THEN
						expect(vm.activeCustomer).toEqual(sut);
					});

					it('should navigate by default to selection of profile when successfully logged in with user with multiple profiles', function () {
						//GIVEN
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
						var vm = element.controller('authProfileSelectForm');
						scope.$root.requestedState = {
							toState: 'app.dashboard'
						};

						vm.activeCustomer = 'customer';

						$stateProvider
							.state('app', {
								abstract: true
							})
							.state('app.dashboard', {
								url: '/dashboard'
							});

						// WHEN
						vm.login();
						$timeout.flush();

						// THEN
						expect($state.current.name).toEqual('app.dashboard');
					});

					it('should redirect by default to defaultRedirectStateAfterLogin when successfully logged in with one profile', function () {
						//GIVEN
						$stateProvider
							.state('app', {
								abstract: true
							})
							.state('app.dashboard', {
								url: '/dashboard'
							});

						var sut = {
							customerName: 'customer'
						};

						$rootScope.$digest();
						var vm = element.controller('authProfileSelectForm');
						vm.activeCustomer = sut;

						scope.$root.user.$extend({
							customers: [sut]
						});

						// WHEN
						vm.login();
						scope.$digest();
						$timeout.flush();

						// THEN
						expect($state.current.name).toEqual(appConf.generalSettings.defaultRedirectStateAfterLogin);
					});
				});
			});
		});
	});
});

