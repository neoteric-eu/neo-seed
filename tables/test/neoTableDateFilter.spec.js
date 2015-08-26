define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('directive: neoTableDateFilter', function () {

				var controller, scope;

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.tables', 'seed.helpers');

					// Inject service into module
					inject(function ($injector, $compile, $rootScope, $httpBackend) {

						$httpBackend.whenGET(/.*/).respond(201, '<div></div>');

						var el = angular.element("<neo-table-date-filter></neo-table-date-filter>");
						$compile(el)($rootScope.$new());
						$httpBackend.flush();
						$rootScope.$digest();

						controller = el.controller('neoTableDateFilter');
						scope = el.isolateScope() || el.scope();
					});

				});

				it('onInitShouldContainInitializedLocalVariables', function () {
					// GIVEN

					// WHEN

					// THEN
					expect(controller.changeDate).toBeDefined();
					expect(controller.ngModel).toBeUndefined();
					expect(controller.selectedDate).toBeUndefined();
				});
			});
		});
	});
});
