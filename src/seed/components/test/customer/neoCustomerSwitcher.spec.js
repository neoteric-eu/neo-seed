define([
	'seed/components/customer/neoCustomerSwitcher.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: components', function () {
			describe('directive: neoCustomerSwitcher', function () {

				var $compile, $rootScope, $log, $cookies, $window;

				beforeEach(function () {
					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						$cookies = $injector.get('$cookies');
						$window = $injector.get('$window');
					});

					$rootScope.user = {
						customers: [
							'testCustomer',
							'testCustomer2'
						],
						user: {
							name: 'testUser'
						}
					};

					$rootScope.customer = {
						name: 'testCustomer',
					};
				});

				it('should should set actuve customer and user according to root scope', function () {
					// GIVEN
					var scope = $rootScope.$new();
					var element = $compile('<neo-customer-switcher></neo-customer-switcher>')(scope);
					scope.$digest();

					var vm = element.controller('neoCustomerSwitcher');

					// WHEN

					// THEN
					expect(vm.activeCustomer).toEqual($rootScope.customer);
					expect(vm.customerCollection).toEqual($rootScope.user.customers);
					expect(vm.user).toEqual($rootScope.user);
				});

				it('should set active customer', function () {
					// GIVEN
					var selectedCustomer = {
						customerId: 'testId',
						customerName: 'testCustomer',
					};

					spyOn($window.location, 'reload').and.callFake(function () {
					});

					var scope = $rootScope.$new();
					var element = $compile('<neo-customer-switcher></neo-customer-switcher>')(scope);
					scope.$digest();

					var vm = element.controller('neoCustomerSwitcher');

					// WHEN
					vm.setActiveCustomer(selectedCustomer);
					scope.$digest();

					// THEN
					expect($rootScope.customer).toEqual(selectedCustomer);
					expect($cookies.getObject('activeCustomer')).toBe(selectedCustomer.customerId);
					expect($window.location.reload).toHaveBeenCalled();
				});
			});
		});
	});
});

