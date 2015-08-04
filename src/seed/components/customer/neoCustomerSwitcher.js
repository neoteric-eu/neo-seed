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
	 * @param $state {Object} State helper service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoCustomerSwitcher($log, $cookies, $state) {
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
				vm.activeCustomer = _.findWhere($scope.$root.user.customers, {
					'customerId': $cookies.getObject('activeCustomer')
				});

				// Functions
				vm.setActiveCustomer = setActiveCustomer;

				function setActiveCustomer(customer) {
					vm.activeCustomer = customer;
					$cookies.putObject('activeCustomer', customer.customerId);

					$state.reload();
					$log.debug('Changed user customer to: ' + customer.customerName);
				}


				$log.debug('Initiated controller');
			}
		};
	}

	app.directive('neoCustomerSwitcher', neoCustomerSwitcher);
});
