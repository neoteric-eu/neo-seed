define(['seed/auth/register/module'], function (module) {
	'use strict';

	function authRegisterForm($log, $state, gettextCatalog, UserAPI, neoSession, appConf) {

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
		 * @requires appConf
		 * @requires neoSession
		 * @requires gettextCatalog
		 */
		return {
			restrict: 'E',
			templateUrl: 'seed/auth/register/forms/register/authRegisterForm.html',
			scope: {},
			controllerAs: 'vm',
			controller: function ($element) {
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
				 * @property registrationError {Object} Validator properties
				 */
				vm.formValidators = {
					fields: {
						repassword: {
							validators: {
								callback: {
									message: gettextCatalog.getString('Passwords must match'),
									callback: function () {
										return vm.user.password === vm.user.repassword;
									}
								}
							}
						}
					}
				};

				/**
				 * @method
				 * @memberOf seed.auth.registration.authRegisterForm.prototype
				 * @description Triggers user registration
				 */
				function register() {
					vm.registrationError = undefined;

					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI
							.register(vm.user)
							.then(function (user) {
								neoSession
									.setSession(user, _.first(user.customers))
									.then(function () {
										$state.go(appConf.generalSettings.defaultRedirectStateAfterLogin);
									});
							})
							.catch(function (error) {
								vm.registrationError = error.$response.data.message;
							});
					}


					$log.debug('Submitted registration form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authRegisterForm', authRegisterForm);
});


