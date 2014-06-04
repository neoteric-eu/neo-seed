/*jshint unused: false */

(function() {
	'use strict';
	define(['angular', 'angularMocks', 'app', 'globalSettings'],
	function(angular, mocks, app, globalSettings) {

		describe('documentService', function() {
			var $httpBackend, $exceptionHandler, documentService, successCb, errorCb;
			var doc = {
				templateId: '000000000000000000000000',
				name: 'whatever',
				description: 'same as above'
			};
			beforeEach(module('document.services'));

			beforeEach(inject(function($injector) {
				$httpBackend = $injector.get('$httpBackend');
				documentService = $injector.get('documentService');
				successCb = jasmine.createSpy();
				errorCb = jasmine.createSpy();
			}));



			it('should getDocuments()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documents').respond(200, {});
				documentService.getDocuments().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getDocuments()', function() {
				$httpBackend.expectGET(globalSettings.get('tempUrl') + 'documents').respond(409, {});
				documentService.getDocuments().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should createDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documents').respond(200, {});
				documentService.createDocument(doc).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to createDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('tempUrl') + 'documents').respond(409, {});
				documentService.createDocument(doc).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should removeDocument()', function() {
				$httpBackend.expectDELETE(globalSettings.get('tempUrl') + 'documents').respond(200, {});
				documentService.removeDocument(doc).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to removeDocument()', function() {
				$httpBackend.expectDELETE(globalSettings.get('tempUrl') + 'documents').respond(409, {});
				documentService.removeDocument(doc).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});


		});


	});
}());
