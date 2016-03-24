define([
	'seed/auth/password/forms/passwordReset/authPasswordResetForm.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('module: password', function () {
				describe('directive: authPasswordResetForm', function () {

					var $compile, $rootScope, $state, $timeout, $q, $stateParams, UserAPI;

					beforeEach(function () {
						inject(function ($injector) {
							$compile = $injector.get('$compile');
							$state = $injector.get('$state');
							$stateParams = $injector.get('$stateParams');
							$rootScope = $injector.get('$rootScope');
							$q = $injector.get('$q');
							$timeout = $injector.get('$timeout');
							UserAPI = $injector.get('UserAPI');
						});
					});

					it('should set token in user model on init', function () {
						// GIVEN
						$stateParams.token = 'token';
						var scope = $rootScope.$new();
						var element = $compile('<auth-password-reset-form></auth-password-reset-form>')(scope);

						// WHEN
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authPasswordResetForm');

						// THEN
						expect(vm.user.token).toEqual('token');
					});

					it('should navigate to login page after successful password reset', function () {
						// GIVEN
						spyOn(UserAPI, 'resetPasswordFinish').and.callFake(function () {
							return $q.resolve();
						});

						spyOn($state, 'go').and.callFake(function (state) {
							return $q.resolve(state);
						});

						var scope = $rootScope.$new();
						var element = $compile('<auth-password-reset-form></auth-password-reset-form>')(scope);
						$rootScope.$digest();
						$timeout.flush();

						var vm = element.controller('authPasswordResetForm');

						// WHEN
						vm.reset();
						$rootScope.$digest();
						$timeout.flush();

						// THEN
						expect($state.go).toHaveBeenCalledWith('auth.login');
						expect(vm.formSuccess).toBeTruthy();
					});

					it('should show error when server rejects password reset returning cause', function () {
						// GIVEN
						var rejectionCause = 'Rejection cause';
						spyOn(UserAPI, 'resetPasswordFinish').and.callFake(function () {
							return $q.reject({
								$response: {
									data: [rejectionCause]
								}
							});
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
						expect(vm.formError).toEqual(rejectionCause);
					});

					it('should show error when server rejects with 404', function () {
						// GIVEN
						spyOn(UserAPI, 'resetPasswordFinish').and.callFake(function () {
							return $q.reject({
								$response: {
									status: 404
								}
							});
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
						expect(vm.formError).toEqual('No active password reset requests are associated with that email address');
					});
				});
			});
		});
	});
});

