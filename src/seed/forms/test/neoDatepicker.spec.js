define([
	'angular',
	'moment',
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

				var $compile, $rootScope, $httpBackend;

				beforeEach(function () {
					// Instantiate the fake module
					module(
						'gettext', 'seed.templateCache'
					);
				});

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.forms', 'seed.helpers');

					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$httpBackend = $injector.get('$httpBackend');
					});
				});

				describe('directive: neoDatarangepicker', function () {

					var tpl = '<input neo-datepicker="vm.options" ng-model="vm.dates" type="text">';

					var dates = {
						startDate: moment('2015-06-25').startOf('day'),
						endDate: moment('2015-08-15').startOf('day')
					};

					var options = {
						singleDatePicker: true
					};

					it('should defaults to current date if ng-model is empty and allowEmpty is not set', function () {

						var scope = $rootScope.$new();
						scope.vm = {
							dates: {},
							options: {}
						};
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
							options: {singleDatePicker: false}
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
						scope.vm = {
							dates: {},
							options: options
						};
						// Compile a HTML containing the directive
						var element = $compile(tpl)(scope);
						$rootScope.$digest();
						/* get datarangePicker instance */
						var dr = element.data('daterangepicker');

						expect(element.val()).toContain(moment().format(dr.locale.format));
						expect(element.val().length).toEqual(moment().format(dr.locale.format).length);
					});

					it('should clean up on scope destroy', function () {
						var scope = $rootScope.$new();
						scope.vm = {
							dates: {},
							options: options
						};

						var element = $compile(tpl)(scope);
						$rootScope.$digest();

						expect(element.data('daterangepicker')).toBeDefined();

						scope.$destroy();

						expect(element.data('daterangepicker')).toBeUndefined();
					});

					it('should clear datepicker', function () {
						var scope = $rootScope.$new();
						scope.vm = {
							dates: moment('2016-03-25').startOf('day'),
							options: {
								singleDatePicker: true
							}
						};

						var element = $compile(tpl)(scope);
						$rootScope.$digest();

						var datepicker = element.data('daterangepicker');
						spyOn(datepicker, 'clear');

						scope.vm.dates = null;

						scope.$digest();

						expect(datepicker.clear).toHaveBeenCalled();
					});

					describe('update values (startDate only)', function () {
						var scope;

						beforeEach(function () {
							scope = $rootScope.$new();
							scope.vm = {
								dates: {
									startDate: moment('2016-03-25').startOf('day')
								},
								options: options
							};
						});

						it('should change settings after language change (for startDate only)', function () {
							$compile(tpl)(scope);
							$rootScope.$digest();

							$rootScope.$broadcast('seed.languageAPI.setLanguage');
							expect(scope.vm.dates.locale()).toBe(moment().locale());
						});

						it('should re-render datepicker (for startDate only)', function () {
							var element = $compile(tpl)(scope);
							$rootScope.$digest();

							var datepicker = element.data('daterangepicker');
							spyOn(datepicker, 'setStartDate');

							scope.vm.dates = moment('2016-03-27').startOf('day');
							scope.$digest();

							expect(datepicker.setStartDate).toHaveBeenCalled();
						});
					});

					describe('update values (startDate only)', function () {
						var scope;

						beforeEach(function () {
							scope = $rootScope.$new();
							scope.vm = {
								dates: {
									startDate: moment('2016-03-25').startOf('day'),
									endDate: moment('2016-03-26').startOf('day')
								},
								options: {
									singleDatePicker: false
								}
							};
						});

						it('should change settings after language change', function () {
							$compile(tpl)(scope);
							$rootScope.$digest();

							$rootScope.$broadcast('seed.languageAPI.setLanguage');
							expect(scope.vm.dates.startDate.locale()).toBe(moment().locale());
							expect(scope.vm.dates.endDate.locale()).toBe(moment().locale());
						});

						it('should re-render datepicker', function () {
							var element = $compile(tpl)(scope);
							$rootScope.$digest();

							var datepicker = element.data('daterangepicker');
							spyOn(datepicker, 'setStartDate');
							spyOn(datepicker, 'setEndDate');

							scope.vm.dates = {
								startDate: moment('2016-03-25').startOf('day'),
								endDate: moment('2016-03-27').startOf('day')
							};

							scope.$digest();

							expect(datepicker.setStartDate).toHaveBeenCalled();
							expect(datepicker.setEndDate).toHaveBeenCalled();
						});
					});
				});
			});
		});
	});
});

