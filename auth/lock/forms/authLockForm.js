define(['seed/auth/lock/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authLockForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param $state {Object} UI-Router state helper
	 * @param neoSession {Object} Session service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function authLockForm($log, $cookies, $state, neoSession) {
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
					//if (_.isUndefined(vm.user) || _.isEmpty(vm.user.customers)) {
					//	$state.go('auth.login');
					//} else {
					vm.activeCustomer = _.first(vm.user.customers);
					//}

					$log.debug('Initiated controller');
				}

				function login() {

					neoSession.setSession(vm.activeCustomer, $cookies.getObject('token'));
					$state.go('app.dashboard');

					$log.debug('Logged into profile: ' + vm.activeCustomer.customerName);
				}
			}
		};
	}

	module.directive('authLockForm', authLockForm);
});
