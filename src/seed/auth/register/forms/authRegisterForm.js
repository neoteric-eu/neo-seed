define(['seed/auth/register/module'], function (module) {
	'use strict';

	function registerForm($log, $state, UserAPI) {

		$log = $log.getInstance('apps.seed.auth.register.registerForm');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/register/forms/authRegisterForm.html',
			scope: {},
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.user = UserAPI.build();
				// methods
				vm.register = register;

				function register() {
					vm.error = false;
					if (!vm.form.$valid) {
						return;
					}
					UserAPI
						.register()
						.then(function () {
							$state.go('auth.login');
						})
						.catch(function (error) {
							vm.error = true;
							vm.errorMessage = error.$response.data.message; //cause
							init();
							vm.form.$submitted = false;
							vm.form.$setUntouched();
						});
				}


				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('registerForm', registerForm);

});


