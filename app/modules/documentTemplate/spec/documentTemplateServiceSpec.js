/*jshint unused: false */

(function() {
	'use strict';
	define(['angular', 'angularMocks', 'app', 'globalSettings'],
	function(angular, mocks, app, globalSettings) {

		describe('documentTemplateService', function() {
			var $httpBackend, $exceptionHandler, documentTemplateService, successCb, errorCb,locale;
			var template = {
			  'id': '53762680b8ea6c608fbf553a',
			  'name': '53576d399d33da5ee72b45d1',
			  'description': 'bar',
			  'timestamp': '2014-05-16T16:53:52.625+0200',
			  'metaFields': [],
			  'metaFieldCounter': -9223372036854776000,
			  'customerId': '53576d7c9d33da5ee72b45d8'
			};

			angular.module('documentTemplate.services').service('locale', function() {
				return {
					getT: jasmine.createSpy()
				};
			});


			beforeEach(module('documentTemplate.services'));

			beforeEach(inject(function($injector) {
				$httpBackend = $injector.get('$httpBackend');
				documentTemplateService = $injector.get('documentTemplateService');
				successCb = jasmine.createSpy();
				errorCb = jasmine.createSpy();
			}));

/*			it('should getFieldTypes()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'fieldTypes').respond(200, {});
				documentTemplateService.getFieldTypes().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();

			});

			it('should fail to getFieldTypes()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'fieldTypes').respond(409, []);
				documentTemplateService.getFieldTypes().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});*/

			it('should getTemplates()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documentTemplates').respond(200, {});
				documentTemplateService.getTemplates().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getTemplates()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documentTemplates').respond(409, []);
				documentTemplateService.getTemplates().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should getTemplateById()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id + '?').respond(200, {});
				documentTemplateService.getTemplateById(template.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getTemplateById()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id + '?').respond(409, {});
				documentTemplateService.getTemplateById(template.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should createTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates').respond(200, {});
				documentTemplateService.createTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to createTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates').respond(409, {});
				documentTemplateService.createTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should updateTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id).respond(200, {});
				documentTemplateService.updateTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to updateTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates/'  + template.id).respond(409, {});
				documentTemplateService.updateTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should removeTemplate()', function() {
				$httpBackend.expectDELETE(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id).respond(200, {});
				documentTemplateService.removeTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to removeTemplate()', function() {
				$httpBackend.expectDELETE(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id).respond(409, {});
				documentTemplateService.removeTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should restoreTemplateVersion()', function() {
				var version = 2;
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id + '?version=' + version).respond(200, {});
				documentTemplateService.restoreTemplateVersion(template.id, version).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to restoreTemplateVersion()', function() {
				var version = 2;
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documentTemplates/' + template.id + '?version=' + version).respond(409, {});
				documentTemplateService.restoreTemplateVersion(template.id, version).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should get Model', function() {
				var model = 'Model';
				documentTemplateService.documentTemplates.setModel(model);
				documentTemplateService.documentTemplates.getModel();
				expect(documentTemplateService.documentTemplates.getModel()).toEqual('Model');
			});

			it('should remove Model', function() {
				var model = ['raz','dwa'];
				documentTemplateService.documentTemplates.setModel(model);
				expect(documentTemplateService.documentTemplates.getModel().length).toEqual(2);

				documentTemplateService.documentTemplates.removeModel('dwa');
				expect(documentTemplateService.documentTemplates.getModel().length).toEqual(1);
			});

			it('should translateFieldTypes()', function() {
				var fieldTypes = [
					{typeName: 'one'},
					{typeName: 'two'}
				];
				// spyOn(locale, 'getT');
				documentTemplateService.translateFieldsType(fieldTypes);
				// expect(locale.getT).toHaveBeenCalled();
			});

			it('should getFieldTypes()', function() {
				var primitive = [];
				var complex = [];
				var fieldTypes = {
					data: [
						{class: 'PRIMITIVE'},
						{class: 'COMPLEX'},
						{class: 'PRIMITIVE'},
						{class: 'NONE'}
					]
				};
				var docsEnums = {
					fieldTypes: {
						PRIMITIVE: 'PRIMITIVE',
						COMPLEX: 'COMPLEX'
					}
				};
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'fieldTypes').respond(200, fieldTypes);
				documentTemplateService.getFieldTypes().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
				expect(documentTemplateService.primitiveFieldTypes.getModel().length).toEqual(2);
				expect(documentTemplateService.complexFieldTypes.getModel().length).toEqual(1);
			});


			it('should fail to getFieldTypes()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'fieldTypes').respond(409, {});
				documentTemplateService.getFieldTypes().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
				documentTemplateService.getFieldTypes();
			});


			it('should createComplexField()', function() {
				var complex = {};
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'fieldTypes').respond(200, {});
				documentTemplateService.createComplexField(complex).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to createComplexField()', function() {
				var complex = {};
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'fieldTypes').respond(409, {});
				documentTemplateService.createComplexField(complex).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});


		});


	});
}());
