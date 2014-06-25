/*jshint unused: vars */
(function() {
	'use strict';

	define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {

		describe('document Template Controllers', function() {
			var scope, $rootScope, $httpBackend, $routeParams, $location, $q, appMessages, locale,
			$System, $config, documentTemplateService,
			modalMock, modalDfd;

			beforeEach(module('documentTemplate.services'));
			beforeEach(module('document.services'));
			angular.module('documentTemplate.services').constant('documentTemplateModulePath', 'documentTemplateModulePath');
			angular.module('documentTemplate.services').service('$config', function() {
				var baseUrl = 'http://188.116.54.20:2222/api/v1/';
				this.get = function(){
					return baseUrl;
				};
			});

			angular.module('documentTemplate.services').service('system',function() {
				return {
					showLoader: jasmine.createSpy(),
					hideLoader: jasmine.createSpy()
				};
			});

			angular.module('documentTemplate.services').service('appMessages',function() {
				return {
					success: jasmine.createSpy(),
					error: jasmine.createSpy(),
				};
			});

			angular.module('documentTemplate.services').service('locale', function() {
				return {
					getT: jasmine.createSpy()
				};
			});
			angular.module('documentTemplate.services').service('$routeParamsMock',function() {
				return {};
			});


			angular.module('documentTemplate.services').service('ngTableParams',function() {
				var ngTableParams = function (baseParameters, baseSettings) {
					this.data = [];
				};
				return ngTableParams;
			});

			beforeEach(module('documentTemplate.controllers'));

			beforeEach(inject(function($injector) {
				$routeParams = $injector.get('$routeParamsMock');
				$config = $injector.get('$config');
				documentTemplateService = $injector.get('documentTemplateService');
				$httpBackend = $injector.get('$httpBackend');
				$rootScope = $injector.get('$rootScope');
				$q = $injector.get('$q');
				$location = $injector.get('$location');
				appMessages = $injector.get('appMessages');
				locale = $injector.get('locale');
				$System = $injector.get('system');

				scope = $rootScope.$new();

				modalMock = jasmine.createSpyObj('$modal', ['open', 'close', 'dismiss']);
				modalMock.open.andCallFake(function(){
					modalDfd = $q.defer();
					return {result: modalDfd.promise};
				});

			}));

			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			describe('CreateTemplateController', function() {

				beforeEach(inject(function($injector) {
					var $controller = $injector.get('$controller');
					function createCreateTemplateController() {
						return $controller('CreateTemplateController', {
							'$scope' : scope,
							'documentTemplateService': documentTemplateService,
							'$System': $System,
							'$modal': modalMock,
							'$routeParams': $routeParams
						});
					}
					createCreateTemplateController();
				}));


				it('should addNewField()', function() {
					spyOn(scope, 'showAddOptions').andReturn(true);
					var array = [];
					var selectedType = 'RADIO';
					expect(array.length).toEqual(0);
					scope.addNewField(array, selectedType);
					expect(array.length).toEqual(1);
				});

				it('should isValidationPattern()', function() {
					var validationPattern = '//';
					scope.isValidationPattern(validationPattern);
				});

				it('should saveTemplate()', function() {
					var form = {version: {}};
					spyOn(scope, 'updateTemplate');
					scope.saveTemplate(form);
					expect(scope.updateTemplate).toHaveBeenCalled();
				});

				it('should initTemplate()', function() {
					var deferred = $q.defer();
					var primitiveFieldTypes = ['raz', 'dwa'];
					spyOn(documentTemplateService, 'getFieldTypes').andReturn(deferred.promise);
					spyOn(documentTemplateService.primitiveFieldTypes, 'getModel').andReturn(primitiveFieldTypes);
					scope.initTemplate();
					deferred.resolve();
					scope.$digest();

					expect(documentTemplateService.primitiveFieldTypes.getModel).toHaveBeenCalled();
					expect(scope.selectedType).toEqual('raz');
					expect(scope.editMode).toEqual(0);
				});

				it('should initTemplate()', function() {
					$routeParams.templateId = '000';
					var deferred = $q.defer();
					var deferred2 = $q.defer();
					var activeTemplate = {
						id: '0000',
						metaFields: [
							{validationPattern: 'a'},
							{validationPattern: 'b'},
							{validationPattern: null}
						]
					};
					spyOn(documentTemplateService, 'getFieldTypes').andReturn(deferred.promise);
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred2.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);

					scope.initTemplate();
					deferred.resolve();
					deferred2.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should initTemplate()', function() {
					$routeParams.templateId = '000';
					var deferred = $q.defer();
					var deferred2 = $q.defer();

					spyOn(documentTemplateService, 'getFieldTypes').andReturn(deferred.promise);
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred2.promise);

					scope.initTemplate();
					deferred.resolve();
					deferred2.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
				});

				it('should editTemplate()', function() {
					var deferred = $q.defer();
					var template = {};
					var version = {version: 1};
					var activeTemplate = {id: '0000'};
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);
					scope.editTemplate(template, version);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.form).toEqual(activeTemplate);
				});

				it('should fail to editTemplate()', function() {
					var deferred = $q.defer();
					var template = {};
					var version = {version: 1};
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred.promise);

					scope.editTemplate(template, version);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should saveTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					var activeTemplate = {id: '0000'};
					spyOn(documentTemplateService, 'createTemplate').andReturn(deferred.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);
					scope.saveTemplate(form);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/template/edit/0000');
					expect(scope.form).toEqual(activeTemplate);
				});

				it('should saveTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					var changeLocation = {};
					spyOn(documentTemplateService, 'createTemplate').andReturn(deferred.promise);
					scope.saveTemplate(form, changeLocation);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/templates');
				});

				it('should fail to saveTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					spyOn(documentTemplateService, 'createTemplate').andReturn(deferred.promise);
					scope.saveTemplate(form);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should updateTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					var activeTemplate = {};
					spyOn(documentTemplateService, 'updateTemplate').andReturn(deferred.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);
					scope.updateTemplate(form);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.form).toEqual(activeTemplate);
				});

				it('should updateTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					var changeLocation = {};
					var activeTemplate = {};
					spyOn(documentTemplateService, 'updateTemplate').andReturn(deferred.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);
					scope.updateTemplate(form, changeLocation);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/templates');
				});

				it('should fail to updateTemplate()', function() {
					var deferred = $q.defer();
					var form = {};
					spyOn(documentTemplateService, 'updateTemplate').andReturn(deferred.promise);
					scope.updateTemplate(form);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should restoreVersionModal()', function() {
					var template = {};
					var version = {};

					spyOn(scope, 'restoreVersion');
					scope.restoreVersionModal(template, version);

					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.restoreVersion).toHaveBeenCalled();
				});

				it('should restoreVersion()', function() {
					var deferred = $q.defer();
					var activeTemplate = {templateName: 'name'};
					var version = {};
					var id = '1';
					spyOn(documentTemplateService, 'restoreTemplateVersion').andReturn(deferred.promise);
					spyOn(documentTemplateService.activeTemplate, 'getModel').andReturn(activeTemplate);

					scope.restoreVersion(id, version);
					deferred.resolve();
					scope.$digest();

					expect(scope.form.templateName).toEqual('name');
				});

				it('should restoreVersion()', function() {
					var deferred = $q.defer();
					var version = {};
					var id = '1';
					spyOn(documentTemplateService, 'restoreTemplateVersion').andReturn(deferred.promise);

					scope.restoreVersion(id, version);
					deferred.reject();
					scope.$digest();

					expect(appMessages.error).toHaveBeenCalled();
				});

				it('should switchIcon()', function() {
					scope.form = {icon: 'dwa'};
					var i = 1;
					var iconsArray = ['raz', 'dwa', 'trzy'];
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					scope.switchIcon(i);
					expect(documentTemplateService.iconsArray.getModel).toHaveBeenCalled();
					expect(scope.form.icon).toEqual('trzy');
					expect(scope.disableRightArrow).toEqual(true);
				});

				it('should switchIcon()', function() {
					scope.form = {icon: 'dwa'};
					var i = -1;
					var iconsArray = ['raz', 'dwa', 'trzy'];
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					scope.switchIcon(i);
					expect(documentTemplateService.iconsArray.getModel).toHaveBeenCalled();
					expect(scope.form.icon).toEqual('raz');
					expect(scope.disableLeftArrow).toEqual(true);
				});

				it('should switchIcon()', function() {
					scope.form = {icon: 'raz'};
					var i = -1;
					var iconsArray = ['raz', 'dwa', 'trzy'];
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					scope.switchIcon(i);
					expect(documentTemplateService.iconsArray.getModel).toHaveBeenCalled();
					expect(scope.form.icon).toEqual('raz');
				});

				it('should switchIcon()', function() {
					scope.form = {icon: 'trzy'};
					var i = 1;
					var iconsArray = ['raz', 'dwa', 'trzy'];
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					scope.switchIcon(i);
					expect(documentTemplateService.iconsArray.getModel).toHaveBeenCalled();
					expect(scope.form.icon).toEqual('trzy');
				});

				it('should removeField()', function() {
					var field = 'field';
					var metaFields = ['raz', 'field', 'trzy'];
					expect(metaFields.length).toEqual(3);
					scope.removeField(field, metaFields);
					expect(metaFields.length).toEqual(2);
				});

				it('should editModal()', function() {
					scope.editModal();
					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
				});

				it('should addOption()', function() {
					var field = {};
					scope.addOption(field);
					expect(field.options.length).not.toEqual(0);
				});

				it('should deleteOption()', function() {
					var index = 1;
					var field = {
						options: ['raz', 'dwa', 'trzy']
					};
					expect(field.options.length).toEqual(3);
					scope.deleteOption(field, index);
					expect(field.options.length).toEqual(2);
				});

				it('should showAddOptions()', function() {
					var field = {typeName: 'DATE'};
					expect(scope.showAddOptions(field)).toEqual(false);
				});

				it('should showAddOptions()', function() {
					var field = {fieldTypeName: 'DATE'};
					expect(scope.showAddOptions(field)).toEqual(false);
				});

				it('should showAddOptions()', function() {
					var field = {fieldTypeName: 'RADIO'};
					expect(scope.showAddOptions(field)).toEqual(true);
				});

				it('should showHelpText()', function() {
					var field = {fieldTypeName: 'DATE'};
					expect(scope.showHelpText(field)).toEqual(false);
				});

				it('should showHelpText()', function() {
					var field = {fieldTypeName: ''};
					expect(scope.showHelpText(field)).toEqual(true);
				});

				it('should showValidationInput()', function() {
					var field = {fieldTypeName: ''};
					expect(scope.showValidationInput(field)).toEqual(false);
					field.fieldTypeName = 'TEXTFIELD';
					expect(scope.showValidationInput(field)).toEqual(true);
				});

			});  // END OF DESCRIBE

			describe('TemplateListController', function() {

				beforeEach(inject(function($injector) {
					var $controller = $injector.get('$controller');
					function createTemplateListController() {
						return $controller('TemplateListController', {
							'$scope' : scope,
							'documentTemplateService': documentTemplateService,
							'system': $System,
							'$modal': modalMock,
							'$routeParams': $routeParams
						});
					}
					createTemplateListController();
				}));


				it('should getTemplates()', function() {
					var deferred = $q.defer();
					var templates = [{},{},{}];
					spyOn(documentTemplateService, 'getTemplates').andReturn(deferred.promise);
					spyOn(documentTemplateService.documentTemplates, 'getModel').andReturn(templates);

					scope.getTemplates();
					deferred.resolve();
					scope.$digest();
					expect($System.showLoader).toHaveBeenCalled();
					expect(scope.documentTemplates).toEqual(templates);
					expect(documentTemplateService.getTemplates).toHaveBeenCalled();
					expect(documentTemplateService.documentTemplates.getModel).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should fail to getTemplates()', function() {
					var deferred = $q.defer();
					var templates = [{},{},{}];
					spyOn(documentTemplateService, 'getTemplates').andReturn(deferred.promise);
					spyOn(documentTemplateService.documentTemplates, 'getModel').andReturn(templates);

					scope.getTemplates();
					deferred.reject();
					scope.$digest();
					expect($System.showLoader).toHaveBeenCalled();
					expect(scope.documentTemplates).toEqual(undefined);
					expect(appMessages.error).toHaveBeenCalled();
					//expect($System.$exceptionHandler).toHaveBeenCalled();
				});

				it('should refreshTemplatesList()', function() {
					var templates = [{},{},{}];
					spyOn(documentTemplateService.documentTemplates, 'getModel').andReturn(templates);
					scope.refreshTemplatesList();
					expect(documentTemplateService.documentTemplates.getModel).toHaveBeenCalled();
					expect(scope.documentTemplates.length).toEqual(3);
				});

				it ('should createDoc()', function() {
					scope.createDoc();
					expect($location.path()).toEqual('/document/create');
				});

				it ('should editTemplate()', function() {
					var document = {id: '00000'};
					scope.editTemplate(document);
					expect($location.path()).toEqual('/template/edit/00000');
				});

				it ('should open removeTemplateModal()', function() {
					spyOn(scope, 'removeTemplate');

					scope.removeTemplateModal();
					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.removeTemplate).toHaveBeenCalled();
				});

				it ('should removeTemplate()', function() {
					var template = {};
					scope.templatesTable = {
						reload: function() {}
					};
					var deferred = $q.defer();
					spyOn(documentTemplateService, 'removeTemplate').andReturn(deferred.promise);
					spyOn(scope.templatesTable, 'reload');

					scope.removeTemplate (template);
					deferred.resolve(template);
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(documentTemplateService.removeTemplate).toHaveBeenCalled();
					expect(scope.templatesTable.reload).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect(locale.getT).toHaveBeenCalled();
				});

				it ('should fail to removeTemplate()', function() {
					var deferred = $q.defer();
					spyOn(documentTemplateService, 'removeTemplate').andReturn(deferred.promise);

					scope.removeTemplate ();
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect(locale.getT).toHaveBeenCalled();
				});


			});  // END OF DESCRIBE


		});	// END OF OUTER DESCRIBE
	});
}());
