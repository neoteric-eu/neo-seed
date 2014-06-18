/*jshint unused: vars */
(function() {
	'use strict';

	define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {

		describe('document Controllers', function() {
			var scope, $rootScope, $httpBackend, $routeParams, $location, $q, appMessages, locale,
			$System, $config, documentService, documentTemplateService,
			modalMock, modalDfd;

			beforeEach(module('document.services'));
			beforeEach(module('documentTemplate.services'));
			angular.module('document.services').constant('documentModulePath', 'documentModulePath');
			angular.module('document.services').service('$config', function() {
				var baseUrl = 'http://188.116.54.20:2222/api/v1/';
				this.get = function(){
					return baseUrl;
				};
			});

			angular.module('document.services').service('system',function() {
				return {
					showLoader: jasmine.createSpy(),
					hideLoader: jasmine.createSpy()
				};
			});

			angular.module('document.services').service('appMessages',function() {
				return {
					success: jasmine.createSpy(),
					error: jasmine.createSpy(),
				};
			});

			angular.module('document.services').service('locale', function() {
				return {
					getT: jasmine.createSpy()
				};
			});
			angular.module('document.services').service('$routeParamsMock',function() {
				return {};
			});

			angular.module('document.services').service('permissions', function() {
				return {
					features: jasmine.createSpy()

				};
			});
			angular.module('document.services').service('enums', function() {
				return {
					features: jasmine.createSpy()
				};
			});



			angular.module('document.services').service('ngTableParams',function() {
				var ngTableParams = function (baseParameters, baseSettings) {
					this.data = [];
				};
				return ngTableParams;
			});

			beforeEach(module('document.controllers'));

			beforeEach(inject(function($injector) {
				$routeParams = $injector.get('$routeParamsMock');
				$config = $injector.get('$config');
				documentService = $injector.get('documentService');
				documentTemplateService = $injector.get('documentTemplateService');
				$httpBackend = $injector.get('$httpBackend');
				$rootScope = $injector.get('$rootScope');
				$q = $injector.get('$q');
				$location = $injector.get('$location');
				appMessages = $injector.get('appMessages');
				locale = $injector.get('locale');
				$System = $injector.get('system');

				scope = $rootScope.$new();

/*				$System = {};
				$System.hideLoader = function(){};
				$System.showLoader = function(){};
				$System.$exceptionHandler = function(){};
				$System.$exceptionHandler = function(){};
				$System.$appMessages = {
					error : function(){},
					success : function(){},
					warning : function(){}
				};
				$System.$locale = { getT : function(){}};

				spyOn($System, 'showLoader');
				spyOn($System, 'hideLoader');
				spyOn($System, '$exceptionHandler');
				spyOn($System.$appMessages, 'error');
				spyOn($System.$appMessages, 'success');
				spyOn($System.$appMessages, 'warning');
				spyOn($System.$locale, 'getT');*/

				modalMock = jasmine.createSpyObj('$modal', ['open', 'close', 'dismiss']);
				modalMock.open.andCallFake(function(){
					modalDfd = $q.defer();
					return {result: modalDfd.promise};
				});


				// var $controller = $injector.get('$controller');

/*				function createDocumentController() {
					return $controller('DocumentController', {
						'$scope' : scope,
						'documentService': documentService,
						'$System': $System,
						'$modal': modalMock
						//'$routeParams': $routeParams
					});
				}
				createDocumentController();*/
			}));

			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			describe('DocumentController', function() {

				beforeEach(inject(function($injector) {
					var $controller = $injector.get('$controller');
					function createDocumentController() {
						return $controller('DocumentController', {
							'$scope' : scope,
							'documentService': documentService,
							'$System': $System,
							'$modal': modalMock
							//'$routeParams': $routeParams
						});
					}
					createDocumentController();
				}));



				it ('should getDocuments()', function() {
					var deferred = $q.defer();

					spyOn(documentService, 'getDocuments').andReturn(deferred.promise);
					spyOn(documentService.documents, 'getModel').andReturn('someDataFromBackend');

					scope.getDocuments();
					deferred.resolve();
					scope.$digest();

					expect(scope.documents).toEqual('someDataFromBackend');
					expect(documentService.getDocuments).toHaveBeenCalled();
				});

				it ('should fail to getDocuments()', function() {
					var deferred = $q.defer();

					spyOn(documentService, 'getDocuments').andReturn(deferred.promise);

					scope.getDocuments();
					deferred.reject();
					scope.$digest();

					expect(scope.documents).toBeUndefined();
					expect(documentService.getDocuments).toHaveBeenCalled();
				});

				it ('should open removeModal()', function() {
					spyOn(scope, 'removeDocument');

					scope.removeDocumentModal();
					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.removeDocument).toHaveBeenCalled();
				});

				it ('should removeDocument()', function() {
					var doc = {};
					scope.docsTable = {
						reload: function() {}
					};
					var deferred = $q.defer();
					spyOn(documentService, 'removeDocument').andReturn(deferred.promise);
					spyOn(scope.docsTable, 'reload');

					scope.removeDocument(doc);
					deferred.resolve(doc);
					scope.$digest();

					expect(documentService.removeDocument).toHaveBeenCalled();
					expect(scope.docsTable.reload).toHaveBeenCalled();
				});

				it ('should fail to removeDocument()', function() {
					var doc = {};
					scope.docsTable = {
						reload: function() {}
					};
					var deferred = $q.defer();
					spyOn(documentService, 'removeDocument').andReturn(deferred.promise);
					scope.removeDocument(doc);
					deferred.reject();
					scope.$digest();
					expect(documentService.removeDocument).toHaveBeenCalled();
				});

				it ('should open updateDocumentToNewestTemplateModal()', function() {
					spyOn(scope, 'updateDocumentToNewestTemplate');

					scope.updateDocumentToNewestTemplateModal();
					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.updateDocumentToNewestTemplate).toHaveBeenCalled();
				});

				it ('should open updateDocumentToNewestTemplate ()', function() {
					var document = {id: '00000'};
					scope.updateDocumentToNewestTemplate (document);

				});

				xit ('should open editDocument()', function() {
					var document = {id: '00000'};
					scope.editDocument(document);
					expect($location.path()).toEqual('/document/edit/00000');
				});

			});  // END OF DESCRIBE


			describe('CreateDocumentController', function() {
				var previewDocument = {id: '000', versions: [{}], version: 1};
				var previewVersion = {version: 1};

				beforeEach(inject(function($injector) {
					var $controller = $injector.get('$controller');
					function createCreateDocumentController() {
						return $controller('CreateDocumentController', {
							'$scope' : scope,
							'documentService': documentService,
							'documentTemplateService': documentTemplateService,
							'$System': $System,
							'$modal': modalMock,
							'$routeParams': $routeParams
						});
					}
					createCreateDocumentController();
				}));


				it ('should init() documwent creation from template', function() {
					$routeParams.templateId = '1';
					spyOn(scope, 'createNewByTemplate');
					scope.init();
					expect(scope.createNewByTemplate).toHaveBeenCalledWith('1');
				});

				it ('should init() document editing', function() {
					$routeParams.documentId = '1';
					spyOn(scope, 'editDocumentById');
					scope.init();
					expect(scope.editDocumentById).toHaveBeenCalledWith('1');
				});

				it ('should init() document creation without template', function() {
					spyOn(scope, 'createNewByTemplateCreator');
					scope.init();
					expect(scope.createNewByTemplateCreator).toHaveBeenCalled();
				});

				it ('should createNewByTemplateCreator()', function() {
					var deferred = $q.defer();
					var iconsArray = ['raz', 'dwa', 'trzy'];
					var primitiveFieldTypes = ['one', 'two', 'three'];
					spyOn(documentTemplateService, 'getFieldTypes').andReturn(deferred.promise);
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					spyOn(documentTemplateService.primitiveFieldTypes, 'getModel').andReturn(primitiveFieldTypes);
					scope.createNewByTemplateCreator();
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.docSelectedType).toEqual('one');
					expect(locale.getT).toHaveBeenCalled();
				});

				it ('should fail to createNewByTemplateCreator()', function() {
					var deferred = $q.defer();
					var iconsArray = ['raz', 'dwa', 'trzy'];
					spyOn(documentTemplateService, 'getFieldTypes').andReturn(deferred.promise);
					spyOn(documentTemplateService.iconsArray, 'getModel').andReturn(iconsArray);
					scope.createNewByTemplateCreator();
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.document.icon).toEqual('raz');
					expect(locale.getT).toHaveBeenCalled();
				});

				it ('should createNewByTemplate()', function() {
					var deferred = $q.defer();
					var templateId = '1';
					var data = {
						icon: '',
						name: '',
						description: '',
						id: '',
						metaFields: [{},{},{}]
					};
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred.promise);
					scope.createNewByTemplate(templateId);
					deferred.resolve(data);
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.documentTemplate).toEqual(data);
					expect(scope.document.icon).toEqual(data.icon);
					expect(scope.readyToShow).toEqual(true);
				});

				it ('should fail to createNewByTemplate()', function() {
					var deferred = $q.defer();
					var templateId = '1';
					spyOn(documentTemplateService, 'getTemplateById').andReturn(deferred.promise);
					scope.createNewByTemplate(templateId);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect(scope.readyToShow).toEqual(true);
				});

				it ('should editDocumentById()', function() {
					var deferred = $q.defer();
					var documentId = '1';
					var activeDocument = {};
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					scope.editDocumentById(documentId);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.editMode).toEqual(true);
					expect(scope.document).toEqual(activeDocument);
					expect(scope.readyToShow).toEqual(true);
				});

				it ('should fail to editDocumentById()', function() {
					var deferred = $q.defer();
					var documentId = '1';
					var activeDocument = {};
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					scope.editDocumentById(documentId);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should updateTemplate()', function() {
					var deferred = $q.defer();
					var activeDocument = {};
					spyOn(documentService, 'updateDocument').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					scope.updateDocument(activeDocument);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.document).toEqual(activeDocument);
				});

				it('should updateTemplate()', function() {
					var deferred = $q.defer();
					var changeLocation = {};
					var activeDocument = {};
					spyOn(documentService, 'updateDocument').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					scope.updateDocument(activeDocument, changeLocation);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/documents');
				});

				it('should fail to updateTemplate()', function() {
					var deferred = $q.defer();
					var activeDocument = {};
					spyOn(documentService, 'updateDocument').andReturn(deferred.promise);
					scope.updateDocument(activeDocument);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
				});

				it('should saveDocument()', function() {
					var deferred = $q.defer();
					var activeDocument = {id: '0000'};
					spyOn(documentService, 'createDocument').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					spyOn(scope, 'init');
					scope.saveDocument(activeDocument);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/document/edit/0000');
					expect(scope.document).toEqual(activeDocument);
				});

				it('should saveDocument()', function() {
					var deferred = $q.defer();
					var activeDocument = {id: '0000'};
					var changeLocation = {};
					spyOn(documentService, 'createDocument').andReturn(deferred.promise);
					spyOn(documentService.activeDocument, 'getModel').andReturn(activeDocument);
					spyOn(scope, 'init');
					scope.saveDocument(activeDocument, changeLocation);
					deferred.resolve();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.success).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect($location.path()).toEqual('/documents');
				});

				it('should to saveDocument()', function() {
					var deferred = $q.defer();
					var activeDocument = {id: '0000'};
					spyOn(documentService, 'createDocument').andReturn(deferred.promise);
					scope.saveDocument(activeDocument);
					deferred.reject();
					scope.$digest();

					expect($System.showLoader).toHaveBeenCalled();
					expect(appMessages.error).toHaveBeenCalled();
					expect($System.hideLoader).toHaveBeenCalled();
					expect(scope.document).toEqual(undefined);
				});

				it('should update document through method saveDocument()', function() {
					var document = {version: {}};
					spyOn(scope, 'updateDocument');
					scope.saveDocument(document);
					expect(scope.updateDocument).toHaveBeenCalled();
				});

				it ('should open docPreviewModal()', function() {
					var previewDocument = 'document';
					scope.docPreviewModal();
					modalDfd.resolve(previewDocument);
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.document).toEqual('document');
				});

				it ('should restoreDocumentVersion()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'restoreDocumentVersion').andReturn(deferred.promise);
					spyOn(documentService.previewDocument, 'getModel').andReturn('someDataFromBackend');
					scope.restoreDocumentVersion(previewDocument, previewVersion);
					deferred.resolve();
					scope.$digest();

					expect(scope.previewDocument).toEqual('someDataFromBackend');
				});

				it ('should restoreDocumentVersion()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'restoreDocumentVersion').andReturn(deferred.promise);
					scope.restoreDocumentVersion(previewDocument, previewVersion);
					deferred.reject();
					scope.$digest();
				});

			}); // END OF DESCRIBE


			describe('PreviewModalController', function() {
				var documentModulePath = '';
				var previewDocument = {id: '000', versions: [{}], version: 1};
				var previewVersion = {version: 1};

				beforeEach(inject(function($injector) {
					var $modalInstance = jasmine.createSpyObj('$modalInstance', ['close', 'dismiss']);

					var $controller = $injector.get('$controller');
					function createPreviewModalController() {
						return $controller('PreviewModalController', {
							'$scope' : scope,
							'documentService': documentService,
							'$System': $System,
							'$modalInstance': $modalInstance,
							'$routeParams': $routeParams,
							'documentModulePath': documentModulePath,
							'previewDocument': previewDocument,
							'previewVersion': previewVersion
						});
					}
					createPreviewModalController();
				}));

				it ('should initModal()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);
					spyOn(documentService.previewDocument, 'getModel').andReturn('someDataFromBackend');

					scope.initModal();
					deferred.resolve();
					scope.$digest();

					expect(scope.previewDocument).toEqual('someDataFromBackend');
					expect(documentService.previewDocument.getModel).toHaveBeenCalled();
				});

				it ('should fail to initModal()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);

					scope.initModal();
					deferred.reject();
					scope.$digest();
				});

				it ('should restoreDocumentVersion()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'restoreDocumentVersion').andReturn(deferred.promise);
					spyOn(documentService.previewDocument, 'getModel').andReturn('someDataFromBackend');

					scope.restoreDocumentVersion(previewDocument, previewVersion);
					deferred.resolve();
					scope.$digest();

					expect(scope.previewDocument).toEqual('someDataFromBackend');
				});

				it ('should fail to restoreDocumentVersion()', function() {
					var deferred = $q.defer();
					spyOn(documentService, 'restoreDocumentVersion').andReturn(deferred.promise);

					scope.restoreDocumentVersion(previewDocument, previewVersion);
					deferred.reject();
					scope.$digest();
				});

				it ('should switchVersion()', function() {
					var i = 1;
					var deferred = $q.defer();
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);
					spyOn(documentService.previewDocument, 'getModel').andReturn('someDataFromBackend');

					scope.switchVersion(previewDocument, i);
					deferred.resolve();
					scope.$digest();
					expect(scope.previewDocument).toEqual('someDataFromBackend');
				});

				it ('should fail to switchVersion()', function() {
					var i = 0;
					var deferred = $q.defer();
					spyOn(documentService, 'getDocumentById').andReturn(deferred.promise);

					scope.switchVersion(previewDocument, i);
					deferred.reject();
					scope.$digest();
				});


			}); // END OF DESCRIBE



		});
	});
}());
