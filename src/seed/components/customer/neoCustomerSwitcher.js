define(['seed/components/module'], function (app) {
	'use strict';

	/**
	 * Renders user profile switcher
	 * @class neoCustomerSwitcher
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-customer-switcher></neo-customer-switcher>
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param $window {Object} Window object helper
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoCustomerSwitcher($log, $cookies, $window) {
		$log = $log.getInstance('seed.components.neoCustomerSwitcher');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/customer/neoCustomerSwitcher.html',
			controllerAs: 'vm',
			scope: true,
			controller: function ($scope) {
				var vm = this;

				// Variables
				vm.customerCollection = $scope.$root.user.customers;
				vm.user = $scope.$root.user;
				vm.activeCustomer = $scope.$root.customer;

				// Functions
				vm.setActiveCustomer = setActiveCustomer;

				function setActiveCustomer(customer) {
					$scope.$root.customer = customer;
					$cookies.putObject('activeCustomer', customer.customerId);

					$window.location.reload();
					$log.debug('Changed user customer to: ' + customer.customerName);
				}


				$log.debug('Initiated controller');
			}
		};
	}

	app.directive('neoCustomerSwitcher', neoCustomerSwitcher);
});
