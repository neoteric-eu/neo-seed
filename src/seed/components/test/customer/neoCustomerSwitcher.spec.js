define([
	'seed/components/customer/neoCustomerSwitcher.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: components', function () {
			describe('directive: neoCustomerSwitcher', function () {

				var $compile, $rootScope, $log, neoCookie, $window;

				beforeEach(function () {
					$window = {location: {reload: jasmine.createSpy()}};

					module(function ($provide) {
						$provide.value('$window', $window);
					});

					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						neoCookie = $injector.get('neoCookie');
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
						name: 'testCustomer'
					};
				});

				afterEach(function () {
					neoCookie.removeCustomer();
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
						customerName: 'testCustomer'
					};

					spyOn($cookies, 'putObject');


					var scope = $rootScope.$new();
					var element = $compile('<neo-customer-switcher></neo-customer-switcher>')(scope);
					scope.$digest();

					var vm = element.controller('neoCustomerSwitcher');

					// WHEN
					vm.setActiveCustomer(selectedCustomer);
					scope.$digest();

					// THEN
					expect($rootScope.customer).toEqual(selectedCustomer);
					expect(neoCookie.getCustomer()).toBe(selectedCustomer.customerId);
					expect($window.location.reload).toHaveBeenCalled();
				});
			});
		});
	});
});

