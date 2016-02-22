define(['seed/auth/password/module'], function (module) {
	'use strict';

	function authPasswordResetInitForm() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm.html',
			controller: function ($element, $state, UserAPI, gettextCatalog) {
				var vm = this;

				// variables
				vm.user = UserAPI.build();
				vm.formError = undefined;
				vm.formSuccess = false;

				// methods
				vm.reset = reset;

				function reset() {
					vm.formError = undefined;

					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI
							.resetPasswordInit(vm.user)
							.then(function () {
								vm.formSuccess = true;
							})
							.catch(function (response) {
								if (response.$response.status === 404) {
									vm.formError = gettextCatalog.getString('No account found with that email address.');
								}
							});
					}
				}
			}
		};
	}

	module.directive('authPasswordResetInitForm', authPasswordResetInitForm);
});
