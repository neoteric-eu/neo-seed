define([
	'seed/auth/password/module'
], function (module) {
	'use strict';

	function resetPasswordForm () {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/widgets/resetPasswordForm.html',
			controller: function ($element, $stateParams, MedUser, gettextCatalog) {
				var vm = this;

				vm.email = '';

				vm.formValidators = {
					fields: {
						email: {
							validators: {
								notEmpty: {
									message: gettextCatalog.getString('Please enter a valid email address.')
								},
								emailAddress: {
									message: gettextCatalog.getString('Please enter a valid email address.')
								}
							}
						}
					}
				};

				vm.reset = function () {
					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						MedUser.$passwordResetInit(vm.email).then(function () {
							vm.formSuccess = true;
						}, function (res) {
							if(res.status === 404) {
								vm.errorMsg = gettextCatalog.getString('No account found with that email address.');
							}
							vm.formError = true;
						});
					}
				};
			}
		};
	}

	module.directive('resetPasswordForm', resetPasswordForm);
});
