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

			angular.module('document.services').service('$routeParams',function() {
				return {
					documentId: '00000'
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
				//$routeParams = {};
				$routeParams = $injector.get('$routeParams');
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

				function createCreateDocumentController() {
					return $controller('CreateDocumentController', {
						'$scope' : scope,
						'$routeParams':$routeParams

						//'$routeParams': $routeParams
					});
				}
				createCreateDocumentController();
			}));

			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			describe('CreateDocumentController', function() {

				xit ('should initDocument() in edit mode', function() {
					scope.initDocument();
					expect(scope.editMode).toEqual(1);
				});

				xit ('should initDocument() in create new mode', function() {
					delete $routeParams.documentId;
					scope.initDocument();
					expect(scope.editMode).toEqual(0);
				});


			});	// END OF DESCRIBE

		});
	});
}());
