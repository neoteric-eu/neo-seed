define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authLoginForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $rootScope {Function} Angular top-level namespace
	 * @param $state {Object} State helper service
	 * @param neoSession {Object} Session service
	 * @param appConf {Object} Application configuration
	 * @param UserAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function authLoginForm($log, $state, appConf, UserAPI, neoSession, $rootScope) {

		$log = $log.getInstance('seed.auth.login.authLoginForm');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/login/forms/login/authLoginForm.html',
			controllerAs: 'vm',

			controller: function ($scope) {
				var vm = this || {};

				// variables
				vm.user = UserAPI.build();
				vm.predefinedLogins = appConf.environmentSettings.predefinedLogins;
				vm.appConf = appConf;

				// methods
				vm.login = login;
				vm.loginAs = loginAs;

				/**
				 * Sets user login and password to one of predefined
				 * @param loginData {Object}
				 */
				function loginAs(loginData) {
					vm.user.$extend(loginData);

					$log.debug('Chosen predefined login: ' + loginData.login);
				}

				/**
				 * Authenticate user on the server
				 * @method login
				 */
				function login() {
					if (_.isEmpty(vm.user.login) || _.isEmpty(vm.user.password)) {
						return;
					}

					UserAPI
						.login(vm.user)
						.then(function (user) {
							vm.user = user;
							$log.debug('Set user object available globally');
							$scope.$root.user = user;

							$log.debug('Logged in user with ID: ' + user.id);

							if (vm.user.customers.length > 1) {
								$state.transitionTo('auth.profileSelect', {}, {notify: true, reload: false});
							} else {
								neoSession
									.setSession(vm.user, _.first(vm.user.customers))
									.then(function(){
										if ($rootScope.requestedState) {
											$state.go($rootScope.requestedState.toState, $rootScope.requestedState.toParams);
										} else {
											$state.go(appConf.generalSettings.defaultStateToRedirectAfterLogin);
										}
									});
							}
						})
						.catch(function () {
							vm.formError = true;
						});

					$log.debug('Started logging in user');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authLoginForm', authLoginForm);
});
