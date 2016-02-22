define(['seed/auth/password/module'], function (module) {
	'use strict';

	function authPasswordResetForm() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/forms/PasswordReset/authPasswordResetForm.html',
			controller: function ($state, $element, $timeout, $stateParams, gettext, UserAPI, gettextCatalog) {
				var vm = this;

				// variables
				vm.user = UserAPI.build();
				vm.error = undefined;
				vm.formSuccess = false;

				// methods
				vm.init = init;

				vm.init();

				function init() {
					if (!$stateParams.token) {
						return $state.go('auth.login');
					}

					vm.user.token = $stateParams.token;
				}

				vm.formValidators = {
					fields: {
						repassword: {
							callback: {
								message: gettextCatalog.getString('Passwords must match'),
								callback: function () {
									return vm.user.password === vm.user.repassword;
								}
							}
						}
					}
				};

				vm.reset = function () {
					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI.resetPasswordFinish(vm.user)
							.then(function () {
								vm.formSuccess = true;


								$timeout(function () {
									$state.go('auth.login');
								}, 4000);

							})
							.catch(function (response) {
								vm.formError = _.first(response.$response.data);

								if (response.$response.status === 404) {
									vm.formError = gettextCatalog.getString('No active password reset requests are associated with that email address');
								}
							});
					}
				};
			}
		};
	}

	module.directive('authPasswordResetForm', authPasswordResetForm);
});
