define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authProfileSelectForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param $state {Object} State helper service
	 * @param neoSession {Object} Session service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope:
	 *   {redirectToState: string}, controller: Function}}
	 */
	function authProfileSelectForm($log, $cookies, $state, neoSession) {
		$log = $log.getInstance('seed.auth.login.authProfileSelectForm');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
			controllerAs: 'vm',
			scope: {
				redirectToState: '&'
			},

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.user = $scope.$root.user;
				vm.activeCustomer = undefined;

				//methods
				vm.setCustomerActive = setCustomerActive;
				vm.isCustomerActive = isCustomerActive;
				vm.login = login;

				init();

				function init() {
					if (_.isUndefined(vm.user) || _.isEmpty(vm.user.customers)) {
						$state.go('auth.login');
					} else {
						vm.activeCustomer = _.first(vm.user.customers);
					}

					$log.debug('Initiated controller');
				}

				function setCustomerActive(customer) {
					vm.activeCustomer = customer;

					$log.debug('Changed active customer to: ' + customer.customerName);
				}

				function isCustomerActive(customer) {
					//noinspection JSUnresolvedVariable
					return vm.activeCustomer === customer;
				}

				function login() {
					neoSession.setSession(vm.activeCustomer, $cookies.getObject('token'));
					$state.go('app.dashboard');

					$log.debug('Logged into profile: ' + vm.activeCustomer.customerName);
				}
			}
		};
	}

	module.directive('authProfileSelectForm', authProfileSelectForm);
});
