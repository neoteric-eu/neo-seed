define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes',
	'seed/helpers/decorators/logDecorator'
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
					inject(function (_neoTableParams_, $q) {
						neoTableParams = _neoTableParams_;

						mockedDeferred = $q.defer();

						mockedAPI = jasmine.createSpyObj('RestmodCollection', ['filter']);
						mockedAPI.filter.and.returnValue(mockedDeferred.promise);
					});

				});

				it('onEmptyConstructorShouldThrowError', function () {
					// GIVEN
					// WHEN
					var result = function () {
						new neoTableParams();
					};

					// THEN
					expect(result).toThrowError('option "CollectionAPI" must be defined');
				});

				it('onGivenModelShouldReturnBasicConfig', function () {
					// GIVEN
					// WHEN
					var result = new neoTableParams(mockedAPI);

					// THEN
					expect(result).toBeDefined();
				});

				it('onGivenModelShouldReturnConfigWithDefaultParams', function () {
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

				it('onCalledShouldSetQueryParams', function () {
					// GIVEN
					var mockedQueryParams = jasmine.createSpy('queryParams');

					// WHEN
					new neoTableParams(mockedAPI);

					// THEN
					expect(mockedQueryParams).toBeDefined();
				});

				it('onGivenBeforeResolveFunctionShouldCallItWhenDataIsFetched', function () {
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

				it('onGivenAfterResolveFunctionShouldCallItWhenDataIsFetched', function () {
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
