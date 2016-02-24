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
	'seed/forms/_includes',
	'seed/forms/module',
	'seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: password', function () {
				describe('directive: authPasswordResetInitForm', function () {

					var $compile, $rootScope, $timeout, $q, LanguageAPI, UserAPI;

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
							'seed.templateCache', 'seed.forms', 'seed.helpers', 'seed.components',
							'seed.auth');
					});

					beforeEach(function () {
						inject(function ($injector) {
							$compile = $injector.get('$compile');
							$rootScope = $injector.get('$rootScope');
							$timeout = $injector.get('$timeout');
							$q = $injector.get('$q');
							LanguageAPI = $injector.get('LanguageAPI');
							UserAPI = $injector.get('UserAPI');
						});
					});

					it('should init reset password for existing email', function () {
						// GIVEN
						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});

						spyOn(UserAPI, 'resetPassword').and.callFake(function () {
							return $q.resolve();
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-password-reset-form></auth-password-reset-form>')(scope);
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authPasswordResetForm');

						// WHEN
						vm.reset();
						$rootScope.$digest();

						// THEN
						expect(vm.formSuccess).toBeTruthy();
					});

					it('should show error when server returns 404', function () {
						// GIVEN
						spyOn(LanguageAPI, 'getLanguage').and.callFake(function () {
							return {localePOSIX: 'en_GB'};
						});

						spyOn(UserAPI, 'resetPasswordInit').and.callFake(function () {
							return $q.reject({
								$response: {
									status: 404
								}
							});
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-password-reset-init-form></auth-password-reset-init-form>')(scope);
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authPasswordResetInitForm');

						// WHEN
						vm.reset();
						$rootScope.$digest();

						// THEN
						expect(vm.formError).toEqual('No account found with that email address.');
					});
				});
			});
		});
	});
});

