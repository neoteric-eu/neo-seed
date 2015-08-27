define([
	'angular',
	'moment',
	'lodash-extensions',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function (angular, moment) {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('directive: neoTableDateFilter', function () {

				var controller, scope, element;

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.tables', 'seed.helpers');

					// Inject service into module
					inject(function ($injector) {
						var $compile = $injector.get('$compile');
						var $httpBackend = $injector.get('$httpBackend');
						var $rootScope = $injector.get('$rootScope');

						$httpBackend.whenGET(/.*/).respond(201, '<div></div>');

						element = angular.element("<neo-table-date-filter></neo-table-date-filter>");
						$compile(element)($rootScope.$new());
						$httpBackend.flush();
						$rootScope.$digest();

						controller = element.controller('neoTableDateFilter');
						scope = element.isolateScope() || element.scope();
					});

				});

				it('should apply template on init', function () {
					expect(element.html()).not.toEqual('');
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
