/*jshint unused: false */

(function() {
	'use strict';
	define(['angular', 'angularMocks', 'app', 'globalSettings'],
	function(angular, mocks, app, globalSettings) {

		describe('documentService', function() {
			var $httpBackend, $exceptionHandler, documentService, successCb, errorCb;
			var document = {
				id: '000000000000000000000000',
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

			it('should getDocumentById()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documents/' + document.id + '?').respond(200, {});
				documentService.getDocumentById(document.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getDocumentById()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documents/' + document.id + '?').respond(409, {});
				documentService.getDocumentById(document.id).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should getDocuments()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documents').respond(200, {});
				documentService.getDocuments().then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to getDocuments()', function() {
				$httpBackend.expectGET(globalSettings.get('baseUrl') + 'documents').respond(409, {});
				documentService.getDocuments().then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should createDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documents').respond(200, {});
				documentService.createDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to createDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documents').respond(409, {});
				documentService.createDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should updateDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documents/' + document.id).respond(200, {});
				documentService.updateDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to updateDocument()', function() {
				$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'documents/'  + document.id).respond(409, {});
				documentService.updateDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should removeDocument()', function() {
				$httpBackend.expectDELETE(globalSettings.get('baseUrl') + 'documents/' + document.id).respond(200, {});
				documentService.removeDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(successCb).toHaveBeenCalled();
			});

			it('should fail to removeDocument()', function() {
				$httpBackend.expectDELETE(globalSettings.get('baseUrl') + 'documents/' + document.id).respond(409, {});
				documentService.removeDocument(document).then(successCb, errorCb);
				$httpBackend.flush();
				expect(errorCb).toHaveBeenCalled();
			});

			it('should get Model', function() {
				var model = 'Model';
				documentService.documents.setModel(model);
				documentService.documents.getModel();
				expect(documentService.documents.getModel()).toEqual('Model');
			});

			it('should remove Model', function() {
				var model = ['raz','dwa'];
				documentService.documents.setModel(model);
				expect(documentService.documents.getModel().length).toEqual(2);

				documentService.documents.removeModel('dwa');
				expect(documentService.documents.getModel().length).toEqual(1);
			});

		});


	});
}());
