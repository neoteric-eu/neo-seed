define(['seed/auth/lock/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authLockForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} UI-Router state helper
	 * @param neoSession {Object} Session service
	 * @param appConf {Object} Application configuration
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function authLockForm($log, $state, neoSession, appConf) {

		$log = $log.getInstance('seed.auth.login.authLockForm');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/lock/forms/authLockForm.html',
			controllerAs: 'vm',

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.user = $scope.$root.user;

				//methods
				vm.login = login;

				init();

				function init() {
					vm.activeCustomer = _.first(vm.user.customers);

					$log.debug('Initiated controller');
				}

				function login() {

					neoSession.setSession(vm.user, vm.activeCustomer);
					$state.go(appConf.generalSettings.defaultStateToRedirectAfterLogin);

					$log.debug('Logged into profile: ' + vm.activeCustomer.customerName);
				}
			}
		};
	}

	module.directive('authLockForm', authLockForm);
});
