define(['seed/auth/register/module'], function (module) {
	'use strict';

	function authRegisterForm($log, $state, UserAPI) {

		$log = $log.getInstance('apps.seed.auth.register.authRegisterForm');
		$log.debug('Initiated directive');

		/**
		 * Renders default styled registration form template, allowing to add new users to applications.
		 * @class authRegisterForm
		 * @memberOf seed.auth.registration
		 *
		 * @requires $log
		 * @requires $state
		 * @requires UserAPI
		 */
		return {
			restrict: 'E',
			templateUrl: 'seed/auth/register/forms/register/authRegisterForm.html',
			scope: {},
			controllerAs: 'vm',
			controller: function () {
				/** @lends seed.auth.registration.authRegisterForm.prototype */
				var vm = this;

				/**
				 * @property user {User} User instance to be registered
				 */
				vm.user = UserAPI.build();
				/**
				 * @property registrationForm {Object} Reference to Angular form object
				 */
				vm.registrationForm = undefined;
				/**
				 * @property registrationError {Object|Array} Server response error holder
				 */
				vm.registrationError = undefined;

				vm.register = register;

				/**
				 * @method
				 * @memberOf seed.auth.registration.authRegisterForm.prototype
				 * @description Triggers user registration
				 */
				function register() {
					vm.registrationError = undefined;

					if (!vm.registrationForm.$valid) {
						return;
					}

					UserAPI
						.register(vm.user)
						.then(function () {
							$state.go('auth.login');
						})
						.catch(function (error) {
							vm.registrationError = error;
							vm.registrationForm.$submitted = false;
							vm.registrationForm.$setUntouched();
						});
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authRegisterForm', authRegisterForm);
});


