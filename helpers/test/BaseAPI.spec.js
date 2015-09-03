define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('factory: BaseAPI', function () {

				var $log, $httpBackend, $q, BaseAPI;

				beforeEach(function () {
					module('seed.helpers', 'seed.components', 'gettext', 'restmod');

					module(function ($provide) {
						$provide.factory('ChildModel', function (restmod) {
							return restmod.model('/childModels');
						});

						$provide.factory('ParentModel', function (restmod) {
							return restmod.model('/parentModels').mix({
								'child': {
									hasMany: 'ChildModel'
								}
							});
						});

					});

					inject(function ($injector) {
						BaseAPI = $injector.get('BaseAPI');
						$log = $injector.get('$log');
						$httpBackend = $injector.get('$httpBackend');
						$q = $injector.get('$q');

						$log.reset();
					});
				});

				afterEach(function () {
					$httpBackend.verifyNoOutstandingExpectation();
					$httpBackend.verifyNoOutstandingRequest();
				});

				it('should throw error when model is not provided to constructor', inject(function () {
					// GIVEN
					// WHEN
					var sut = function () {
						new BaseAPI();
					};

					// THEN
					expect(sut).toThrowError('Argument "model" must be defined');
				}));

				it('should create new instance when model is provided', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var mockedModel = restmod.model();

					// WHEN
					var sut = new BaseAPI(mockedModel);

					// THEN
					expect(sut.model).toBe(mockedModel);
					expect($log.debug.logs.length).toBe(1);
				}));

				it('should get single model from server', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);

					// WHEN
					MockedAPI.get('id');

					// THEN
					$httpBackend.expectGET('/mockedModels/id').respond(200);
					$httpBackend.flush();
				}));

				it('should get Array of models fr om server', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);

					// WHEN
					MockedAPI.get(['id1', 'id2', 'id3']);

					// THEN
					$httpBackend.expectGET('/mockedModels/id1,id2,id3').respond(200);
					$httpBackend.flush();
				}));

				it('should reject promise when id set is neither Array nor String', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);

					spyOn(MockedModel, '$find').and.callThrough();

					// WHEN
					MockedAPI.get({});

					// THEN
					expect($log.error.logs.length).toBe(1);
					expect(MockedModel.$find).not.toHaveBeenCalled();
				}));

				it('should fetch collection of models form server', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);

					// WHEN
					MockedAPI.fetch();

					// THEN
					$httpBackend.expectGET('/mockedModels').respond(200, []);
					$httpBackend.flush();
				}));

				it('should filter collections on server', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					var params = {filter: {id: 2}};

					// WHEN
					MockedAPI.filter(params);

					// THEN
					$httpBackend.expectGET('/mockedModels?filter=%7B%22id%22:2%7D').respond(200, []);
					$httpBackend.flush();
				}));

				//fit('should remove model from server', inject(function ($injector) {
				//	// GIVEN
				//	var restmod = $injector.get('restmod');
				//	var gettextCatalog = $injector.get('gettextCatalog');
				//	var $timeout = $injector.get('$timeout');
				//	var MockedModel = restmod.model('/mockedModels');
				//	var MockedAPI = new BaseAPI(MockedModel);
				//	var MockedModelInstance = MockedModel.$build({id: 2});
				//
				//	$.SmartMessageBox = jasmine
				//		.createSpy()
				//		.and.callFake(function (config, callback) {
				//			callback(gettextCatalog.getString('Yes'));
				//		});
				//
				//	// WHEN
				//	MockedAPI.remove(MockedModelInstance);
				//
				//	// THEN
				//	$httpBackend.expectDELETE('/mockedModels/2').respond(200);
				//	$httpBackend.flush();
				//}));

				it('should reject promise if removed model does not exist', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					var ModelInstance = MockedModel.$build({id: 2});

					spyOn(ModelInstance, '$destroy').and.callThrough();

					// WHEN
					MockedAPI.remove(undefined);

					// THEN
					expect($log.error.logs.length).toBe(1);
					expect(ModelInstance.$destroy).not.toHaveBeenCalled();
				}));

				it('should persist new model on save', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					var ModelInstance = MockedModel.$build({id: 2});

					// WHEN
					MockedAPI.save(ModelInstance);

					// THEN
					$httpBackend.expectPOST('/mockedModels').respond(200);
					$httpBackend.flush();
				}));

				it('should persist model on save', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var appMessages = $injector.get('appMessages');
					var $timeout = $injector.get('$timeout');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					var ModelInstance = MockedModel.$build({id: 2});
					spyOn(appMessages, 'success').and.callThrough();

					// WHEN
					MockedAPI.save(ModelInstance);

					// THEN
					$httpBackend.expectPOST('/mockedModels').respond(200);
					$httpBackend.flush();
					$timeout.flush();
					expect(appMessages.success).toHaveBeenCalled();
				}));

				it('should build model from properties and save it', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var appMessages = $injector.get('appMessages');
					var $timeout = $injector.get('$timeout');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					spyOn(appMessages, 'success').and.callThrough();
					spyOn(MockedModel, '$build').and.callThrough();

					// WHEN
					MockedAPI.save({label: 'mock'});

					// THEN
					$httpBackend.expectPOST('/mockedModels').respond(200);
					$httpBackend.flush();
					$timeout.flush();
					expect(appMessages.success).toHaveBeenCalled();
					expect(MockedModel.$build).toHaveBeenCalled();
				}));

				it('should throw error when try call save without passing model', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var $timeout = $injector.get('$timeout');
					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);

					// WHEN
					MockedAPI.save();

					// THEN
					expect($log.error.logs.length).toBe(1);
				}));

				it('should persist nested model on save', inject(function ($injector) {
					// GIVEN
					var restmod = $injector.get('restmod');
					var appMessages = $injector.get('appMessages');
					var $timeout = $injector.get('$timeout');

					var MockedModel = restmod.model('/mockedModels');
					var MockedAPI = new BaseAPI(MockedModel);
					var ModelInstance = MockedModel.$build({id: 2});
					spyOn(appMessages, 'success').and.callThrough();

					// WHEN
					MockedAPI.save(ModelInstance);

					// THEN
					$httpBackend.expectPOST('/mockedModels').respond(200);
					$httpBackend.flush();
					$timeout.flush();
					expect(appMessages.success).toHaveBeenCalled();
				}));

				//fit('should build nested model from properties and save it', inject(function ($injector) {
				//	// GIVEN
				//	var restmod = $injector.get('restmod');
				//	var appMessages = $injector.get('appMessages');
				//	var $timeout = $injector.get('$timeout');
				//
				//	var ChildModel = $injector.get('ChildModel');
				//	var ParentModel = $injector.get('ParentModel');
				//
				//	var ChildAPI = new BaseAPI(ChildModel);
				//	var ParentAPI = new BaseAPI(ParentModel);
				//
				//	var ParentInstance = ParentAPI.build({label: 'parent', id: 2, $pk: 2});
				//	ParentAPI
				//		.save(ParentInstance)
				//		.then(function(){
				//			$timeout.flush();
				//			ParentInstance.child = new ChildModel.$collection();
				//		});
				//
				//	// WHEN
				//	ChildAPI.saveNested({label: 'child'}, ParentInstance.child);
				//
				//	// THEN
				//	$httpBackend.expectPOST('/parentModels').respond(200);
				//	$httpBackend.expectPOST('/parentModels/2/childModels').respond(200);
				//	$httpBackend.flush();
				//	$timeout.flush();
				//}));
			});
		});
	});
});
