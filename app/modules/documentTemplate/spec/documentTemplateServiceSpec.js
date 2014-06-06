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



			it('should getTemplates()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documentTemplates').respond(200, {});
				documentTemplateService.getTemplates().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getTemplates()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documentTemplates').respond(409, []);
				documentTemplateService.getTemplates().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should getTemplateById()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documentTemplates/' + template.id + '?').respond(200, {});
				documentTemplateService.getTemplateById(template.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getTemplateById()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documentTemplates/' + template.id + '?').respond(409, {});
				documentTemplateService.getTemplateById(template.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should createTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documentTemplates').respond(200, {});
				documentTemplateService.createTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to createTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documentTemplates').respond(409, {});
				documentTemplateService.createTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should updateTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documentTemplates/' + template.id).respond(200, {});
				documentTemplateService.updateTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to updateTemplate()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documentTemplates/'  + template.id).respond(409, {});
				documentTemplateService.updateTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should removeTemplate()', function() {
				$httpBackend.expectDELETE(globalSettings.get('tempUrl') + 'documentTemplates/' + template.id).respond(200, {});
				dump(template);
				documentTemplateService.removeTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to removeTemplate()', function() {
				$httpBackend.expectDELETE(globalSettings.get('tempUrl') + 'documentTemplates/' + template.id).respond(409, {});
				documentTemplateService.removeTemplate(template).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});


		});


	});
}());
