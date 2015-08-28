define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('factory: neoTableParams', function () {

				var neoTableParams, mockedAPI, mockedDeferred;

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.tables', 'seed.helpers');

					// Inject service into module
					inject(function ($injector) {
						neoTableParams = $injector.get('neoTableParams');
						mockedDeferred = $injector.get('$q').defer();

						mockedAPI = jasmine.createSpyObj('RestmodCollection', ['filter']);
						mockedAPI.filter.and.returnValue(mockedDeferred.promise);
					});

				});

				it('should throw error on empty constructor', function () {
					// GIVEN
					// WHEN
					var result = function () {
						new neoTableParams();
					};

					// THEN
					expect(result).toThrowError('option "CollectionAPI" must be defined');
				});

				it('should return basic config when provided only api', function () {
					// GIVEN
					// WHEN
					var result = new neoTableParams(mockedAPI);

					// THEN
					expect(result).toBeDefined();
				});

				it('should return config with default params', function () {
					// GIVEN
					// WHEN
					var result = new neoTableParams(mockedAPI);

					// THEN
					var expectedResult = {
						page: 1,
						count: 10,
						filter: {},
						sorting: {_id: 'desc'},
						group: {},
						groupBy: null
					};

					expect(result.parameters()).toEqual(expectedResult);
				});

				it('should set query params', function () {
					// GIVEN
					var mockedQueryParams = jasmine.createSpy('queryParams');

					// WHEN
					new neoTableParams(mockedAPI);

					// THEN
					expect(mockedQueryParams).toBeDefined();
				});

				it('should call beforeResolve function when data is fetched', function () {
					// GIVEN
					var mockedOnBeforeResolve = jasmine.createSpy('onBeforeResolve');
					var tableParams = new neoTableParams(mockedAPI, {
						onBeforeResolve: mockedOnBeforeResolve
					});

					// WHEN
					tableParams.reload();

					// THEN
					mockedDeferred.promise
						.then(function () {
							expect(mockedOnBeforeResolve).toHaveBeenCalled();
							mockedDeferred.done();
						});

				});

				it('should call afterResolve function when data is fetched', function () {
					// GIVEN
					var mockedOnAfterResolve = jasmine.createSpy('onAfterResolve');
					var tableParams = new neoTableParams(mockedAPI, {
						onAfterResolve: mockedOnAfterResolve
					});

					// WHEN
					tableParams.reload();

					// THEN
					mockedDeferred.promise
						.then(function () {
							expect(mockedOnAfterResolve).toHaveBeenCalled();
							mockedDeferred.done();
						});
				});
			});
		});
	});
});
