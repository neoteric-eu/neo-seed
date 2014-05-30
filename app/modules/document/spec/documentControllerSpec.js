/*jshint unused: vars */
(function() {
	'use strict';

	define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {

		describe('document Controllers', function() {
			var scope, $rootScope, $httpBackend, $routeParams, $location, $q,
			$System, $config, documentService,
			modalMock, modalDfd;

			beforeEach(module('document.services'));
			angular.module('document.services').constant('documentModulePath', 'documentModulePath');
			angular.module('document.services').service('$config', function() {
				var baseUrl = 'http://188.116.54.20:2222/api/v1/';
				this.get = function(){
					return baseUrl;
				};
			});

			angular.module('document.services').service('$routeParamsMock',function() {
				return {};
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
				$httpBackend = $injector.get('$httpBackend');
				$rootScope = $injector.get('$rootScope');
				$q = $injector.get('$q');
				$location = $injector.get('$location');

				scope = $rootScope.$new();

				$System = {};
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
				spyOn($System.$locale, 'getT');

				modalMock = jasmine.createSpyObj('$modal', ['open', 'close', 'dismiss']);
				modalMock.open.andCallFake(function(){
					modalDfd = $q.defer();
					return {result: modalDfd.promise};
				});


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

			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			describe('InvoiceController', function() {

				it ('should getDocs()', function() {
					var deferred = $q.defer();

					spyOn(documentService, 'getDocuments').andReturn(deferred.promise);
					spyOn(documentService.docs, 'getModel').andReturn('someDataFromBackend');

					scope.getDocs();
					deferred.resolve();
					scope.$digest();

					expect(scope.docs).toEqual('someDataFromBackend');
					expect(documentService.getDocuments).toHaveBeenCalled();
				});

				it ('should open removeModal()', function() {
					spyOn(scope, 'removeDocument');

					scope.removeModal();
					modalDfd.resolve();
					scope.$digest();

					expect(modalMock.open).toHaveBeenCalled();
					expect(scope.removeDocument).toHaveBeenCalled();
				});




			});

		});
	});
}());
