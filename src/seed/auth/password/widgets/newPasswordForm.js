define([
	'seed/auth/password/module',
	'zxcvbn'
], function (module, zxcvbn) {
	'use strict';

	/**
	 * Why zxcvbn?
	 * @see https://github.com/dropbox/zxcvbn
	 */

	function newPasswordForm () {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/widgets/newPasswordForm.html',
			controller: function (
				$state,
				$timeout,
				$element,
				$stateParams,
				gettext,
				MedUser,
				gettextCatalog
			) {
				var vm = this;

				vm.model = {
					password: '',
					repassword: ''
				};

				var strength = [
					gettext('Worst'),
					gettext('Bad'),
					gettext('Weak'),
					gettext('Good'),
					gettext('Strong')
				];

				vm.formValidators = {
					fields: {
						password: {
							validators: {
								notEmpty: {
									message: gettextCatalog.getString('Please enter new password.')
								}
							}
						},
						repassword: {
							validators: {
								notEmpty: {
									message: gettextCatalog.getString('Please repeat password.')
								},
								callback: {
									message: gettextCatalog.getString('Passwords must match'),
									callback: function () {
										return vm.model.password === vm.model.repassword;
									}
								}
							}
						}
					}
				};

				vm.reset = function () {
					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						MedUser.$passwordResetFinish(
							$stateParams.token,
							vm.model.password
						).then(function () {
							vm.formSuccess = true;
							$timeout(function () {
								$state.go('auth.login');
							}, 4000);
						}, function (res) {
							if(res.status === 404) {
								vm.errorMsg = gettextCatalog.getString('No account found with that email address.');
							}
							vm.formError = true;
						});
					}
				};

				vm.calculatePasswordStrength = function () {
					var results =zxcvbn(vm.model.password);
					vm.strength = {
						val: results.score,
						msg: strength[results.score]
					};
				};
			}
		};
	}

	module.directive('newPasswordForm', newPasswordForm);
});
