define([
	'angular',
	'angular-mocks',
	'seed/forms/module',
	'seed/forms/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: forms', function () {
			describe('directive: neoValidate', function () {

				var $compile, $rootScope, $httpBackend, $browser;

				beforeEach(function () {
					// Instantiate the fake modules
					module('seed.forms');

					// Inject service into module
					inject(function (_$injector_, _$compile_, _$rootScope_, _$browser_, _$httpBackend_) {
						$compile = _$compile_;
						$rootScope = _$rootScope_;
						$browser = _$browser_;
						$httpBackend = _$httpBackend_;
						$httpBackend.whenGET(/.*\.html/).respond(201, '<div></div>');
					});

				});

				var excluded = $.fn.formValidation.DEFAULT_OPTIONS.excluded;
				beforeEach(function () {
					$.fn.formValidation.DEFAULT_OPTIONS.excluded = [];
				});

				afterEach(function () {
					$.fn.formValidation.DEFAULT_OPTIONS.excluded = excluded;
				});


				describe('directive: neoValidate declarative configuration', function () {

					/*
					 * Declarative configuration
					 * */
					var template1 =
						'<form neo-validate>' +
						'<div class="form-group">' +
						'<div>' +
						'<input type="text" class="form-control" value="" name="name"' +
						'data-fv-notempty="true" data-fv-notempty-message="The first name is required" />' +
						'</div>' +
						'</div>' +
						'</form>';

					it('should call formValidation plugin on element', function () {

						var spy = jasmine.createSpy('formValidation');
						var formValidation = $.fn.formValidation;
						$.fn.formValidation = spy;

						var element = $compile(template1)($rootScope);
						$rootScope.$digest();

						expect(spy).toHaveBeenCalled();
						expect(element.formValidation).toBeDefined();

						$.fn.formValidation = formValidation;
					});


					it('should make the form invalid if name is empty', function () {
						// Compile a piece of HTML containing the directive
						var element = $compile(template1)($rootScope);
						$rootScope.$digest();

						var formValidation = element.data('formValidation');
						formValidation.validate();
						expect(formValidation.isValid()).toBeFalsy();
					});

					it('should make the form valid when value is provided', function () {
						// Compile a piece of HTML containing the directive
						var element = $compile(template1)($rootScope);
						$rootScope.$digest();

						var formValidation = element.data('formValidation');
						/* set the value */
						element.find('input').val('John Smith');
						formValidation.validate();
						expect(formValidation.isValid()).toBeTruthy();
					});

					it('should validate form on locale change', function (done) {
						// GIVEN
						var element = $compile(template1)($rootScope);
						$rootScope.$digest();

						spyOn(element, 'formValidation');
						spyOn(element, 'on');

						// WHEN
						$rootScope.$broadcast('seed.languageAPI.setLanguage', {
							locale: 'pl-PL'
						});

						$rootScope.$applyAsync();
						$browser.defer.flush();

						done();

						// THEN
						expect(element.formValidation).toHaveBeenCalledWith('destroy');
						expect(element.on).toHaveBeenCalledWith('init.form.fv');
					});

					it('should skip validation if new locale is current locale', function () {
						// GIVEN
						$compile(template1)($rootScope);
						$rootScope.$digest();

						var spy = jasmine.createSpy('formValidation');
						var formValidation = $.fn.formValidation;
						$.fn.formValidation = spy;

						// WHEN
						$rootScope.$broadcast('seed.languageAPI.setLanguage', {
							locale: 'en-GB'
						});
						$rootScope.$digest();

						// THEN
						expect(spy).not.toHaveBeenCalled();
						$.fn.formValidation = formValidation;
					});
				});

				describe('directive: neoValidate programmatic configuration', function () {
					/*
					 * Programmatic configuration
					 * */
					var template2 =
						'<form neo-validate="settings">' +
						'<div class="form-group">' +
						'<div>' +
						'<input type="text" class="form-control" value="" name="name"/>' +
						'</div>' +
						'</div>' +
						'</form>';

					var settings = {
						fields: {
							name: {
								validators: {
									notEmpty: {
										message: 'The first name is required'
									}
								}
							}
						}
					};

					it('should accept configuration through js object', function () {

						var scope = $rootScope.$new();
						var spy = jasmine.createSpy('formValidation');
						var formValidation = $.fn.formValidation;

						scope.settings = settings;
						$.fn.formValidation = spy;
						// Compile a piece of HTML containing the directive
						$compile(template2)(scope);
						$rootScope.$digest();
						expect(spy).toHaveBeenCalled();
						expect(spy.calls.argsFor(0)[0].fields.name).toBeDefined();
						$.fn.formValidation = formValidation;
					});

					it('should make the form invalid if name is empty', function () {

						var scope = $rootScope.$new();
						scope.settings = settings;
						// Compile a piece of HTML containing the directive
						var element = $compile(template2)(scope);
						$rootScope.$digest();

						var formValidation = element.data('formValidation');
						/* set the value */
						formValidation.validate();
						expect(formValidation.isValid()).toBeFalsy();
					});

				});

			});
		});
	});
});

