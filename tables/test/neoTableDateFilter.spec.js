define([
	'angular',
	'moment',
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
], function (angular, moment) {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('directive: neoTableDateFilter', function () {

				var controller, scope, element, $compile, $rootScope;

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


						element = angular.element("<neo-table-date-filter></neo-table-date-filter>");
						$compile(element)($rootScope.$new());
						$rootScope.$digest();

						controller = element.controller('neoTableDateFilter');
						scope = element.isolateScope() || element.scope();
					});

				});

				it('should apply template on init', function () {
					expect(element.html()).not.toEqual('');
				});

				it('can be initialized through ngTable', function () {

					var neoTableElement = angular.element(
						'<table ng-table>' +
						'<tbody><tr><td filter="{\'dueDate\': \'date\'}"><</td></tr></tbody>' +
						'</table>');
					$compile(neoTableElement)($rootScope.$new());
					$rootScope.$digest();

					expect(neoTableElement.find('neo-table-date-filter').length).toEqual(1);
				});

				it('should contain initialized local variables and functions on init', function () {
					// GIVEN

					// WHEN

					// THEN
					expect(controller.changeDate).toBeDefined();
					expect(controller.ngModel).toBeUndefined();
					expect(controller.selectedDate).toBeUndefined();
				});

				it('update model when selected date change', function () {
					// GIVEN
					var updatedModel = moment();
					controller.selectedDate = updatedModel;
					// WHEN
					controller.changeDate();

					// THEN
					expect(controller.ngModel).toBe(updatedModel.format('YYYY-MM-DD'));
				});


				it('clear model when selected date is falsy value', function () {
					// GIVEN
					controller.selectedDate = null;
					// WHEN
					controller.changeDate();

					// THEN
					expect(controller.ngModel).toBeUndefined();
				});
			});
		});
	});
});
