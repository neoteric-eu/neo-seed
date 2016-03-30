define([
	'seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: password', function () {
				describe('directive: authPasswordResetInitForm', function () {

					var $compile, $rootScope, $timeout, $q, UserAPI;

					beforeEach(function () {
						inject(function ($injector) {
							$compile = $injector.get('$compile');
							$rootScope = $injector.get('$rootScope');
							$timeout = $injector.get('$timeout');
							$q = $injector.get('$q');
							UserAPI = $injector.get('UserAPI');
						});
					});

					it('should init reset password for existing email', function () {
						// GIVEN

						spyOn(UserAPI, 'resetPasswordFinish').and.callFake(function () {
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

