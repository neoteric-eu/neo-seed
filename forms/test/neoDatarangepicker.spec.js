/**
 * Created by kobalka 2015-08-27.
 */

define([
	'angular',
	'moment',
	'lodash-extensions',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes',
	'seed/forms/module',
	'seed/forms/_includes',
	'seed/forms/select/partials/match.html'
], function (ng, moment) {
	'use strict';

	describe('module: seed', function () {
		describe('module: forms', function () {
			describe('directive: neoDatarangepicker', function () {

				var $compile,	$rootScope, $httpBackend;

				beforeEach(function () {
					// Instantiate the fake module
					module(
						'gettext', 'seed.templates'
					);
				});

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.forms', 'seed.helpers');

					// Inject service into module
					inject(function (_$injector_, _$compile_, _$rootScope_, _$httpBackend_) {
						$compile = _$compile_;
						$rootScope = _$rootScope_;
						$httpBackend = _$httpBackend_;
					});
				});

				describe('directive: neoDatarangepicker', function () {

					var tpl =  '<input neo-daterangepicker="vm.options" ng-model="vm.dates" type="text">';

					var dates = {
						startDate: moment("2015-06-25").startOf('day'),
						endDate: moment("2015-08-15").startOf('day')
					};

					var options = {
						singleDatePicker: true
					};

					it('should defaults to current date if ng-model is empty ', function () {

						var scope = $rootScope.$new();
						var vm = {
							dates: {},
							options: {}
						};
						scope.vm = vm;
						// Compile a HTML containing the directive
						var element = $compile(tpl)(scope);
						$rootScope.$digest();
						/* get datarangePicker instance */
						var dr = element.data('daterangepicker');

						expect(element.val()).toContain(moment().format(dr.locale.format));

					});

					it('should initialize widget and set initial dates', function () {
						var scope = $rootScope.$new();
						var vm = {
							dates: dates,
							options: {}
						};
						scope.vm = vm;
						// Compile a HTML containing the directive
						var element = $compile(tpl)(scope);
						$rootScope.$digest();
						/* get datarangePicker instance */
						var dr = element.data('daterangepicker');

						expect(dr).toBeNonEmptyObject();
						expect(dr.startDate.startOf('day').toDate()).toEqual(vm.dates.startDate.startOf('day').toDate());
						expect(dr.endDate.startOf('day').toDate()).toEqual(vm.dates.endDate.startOf('day').toDate());
						expect(element.val()).toContain(dr.startDate.format(dr.locale.format));
						expect(element.val()).toContain(dr.endDate.format(dr.locale.format));
					});

					it('should accept configuration and create widget in single mode ', function () {

						var scope = $rootScope.$new();
						var vm = {
							dates: {},
							options: options
						};
						scope.vm = vm;
						// Compile a HTML containing the directive
						var element = $compile(tpl)(scope);
						$rootScope.$digest();
						/* get datarangePicker instance */
						var dr = element.data('daterangepicker');

						expect(element.val()).toContain(moment().format(dr.locale.format));
						expect(element.val().length).toEqual(moment().format(dr.locale.format).length);
					});

				});
			});
		});
	});
});

