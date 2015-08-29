define([
	'angular',
	'lodash-extensions',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes',
	'seed/tables/partials/neo-filters.html',
	'seed/tables/partials/neo-footer.html',
	'seed/tables/partials/neo-header.html',
	'seed/tables/partials/neo-sorting.html',
	'seed/tables/filters/date-filter.html',
	'seed/tables/filters/enum-filter.html',
	'seed/tables/filters/related-filter.html',
	'seed/tables/filters/text-filter.html',
	'seed/tables/filters/timestamp-filter.html',
	'seed/tables/_directives/neoTableDateFilter/neoTableDateFilter.html',
	'seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter.html',
	'seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter.html'
], function (angular) {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('directive: neoTableEnumFilter', function () {

				var controller, scope, element, $compile, $rootScope, $log, BaseEnum;

				beforeEach(function () {
					// Instantiate the fake module
					module(
						'gettext',
						'seed.templates'
					);
				});

				beforeEach(function () {
					// Instantiate the fake module
					module(
						'seed.helpers',
						'seed.tables'
					);

					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						BaseEnum = $injector.get('BaseEnum');

						element = angular.element('<neo-table-enum-filter></neo-table-enum-filter>');
						$compile(element)($rootScope.$new());
						$rootScope.$digest();

						controller = element.controller('neoTableEnumFilter');
						scope = element.isolateScope() || element.scope();
					});

				});

				it('should apply template on init', function () {
					expect(element.html()).not.toEqual('');
				});

				it('can be initialized through ngTable', function () {

					var neoTableElement = angular.element(
						'<table ng-table>' +
						'<tbody><tr><td ' +
						'filter="{\'type\': \'enum\'}"' +
						'filter-data="{enumName:\'TypeEnum\', displayProperty: \'label\'}">' +
						'</td></tr></tbody>' +
						'</table>');
					$compile(neoTableElement)($rootScope.$new());
					$rootScope.$digest();

					expect(neoTableElement.find('neo-table-enum-filter').length).toEqual(1);
				});

				it('should contain initialized local variables and functions on init', function () {
					// GIVEN
					// WHEN
					// THEN
					expect(controller.init).toBeFunction();
					expect(controller.selectEnumItem).toBeFunction();
					expect(controller.filterableEnum).toBeUndefined();
					expect(controller.selectedItem).toBeUndefined();
				});

				it('should log error when provided enum can not be injected', function () {
					// GIVEN
					$log.error.logs = [];
					controller.filterableEnum = 'NonExistingEnum';

					// WHEN
					controller.init();

					// THEN
					expect($log.error.logs).toBeArrayOfSize(1);
				});

				it('should update model when selected enum change', function () {
					// GIVEN
					$log.debug.logs = [];
					var fakeEnumItem = {FAKE_ITEM: {label: 'fakeItem'}};
					// WHEN
					controller.filterableEnum = new BaseEnum(fakeEnumItem);
					controller.selectEnumItem(fakeEnumItem.FAKE_ITEM);

					// THEN
					expect(controller.ngModel).toBe('FAKE_ITEM');
					expect($log.debug.logs).toBeArrayOfSize(1);
				});


				it('should clear model when selected item is falsy value', function () {
					// GIVEN
					$log.debug.logs = [];
					var fakeEnumItem = {FAKE_ITEM: {label: 'fakeItem'}};
					// WHEN
					controller.filterableEnum = new BaseEnum(fakeEnumItem);
					controller.selectEnumItem(null);

					// THEN
					expect(controller.ngModel).toBeUndefined();
					expect($log.debug.logs).toBeArrayOfSize(1);
				});
			});
		});
	});
});
