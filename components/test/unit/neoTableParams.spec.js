define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/components/module',
	'seed/components/_includes',
	'seed/helpers/_includes',
	'seed/helpers/decorators/logDecorator'
], function () {
	'use strict';

	describe('module: components', function () {
		describe('module: tables', function () {
			describe('factory: NeoTableParams', function () {

				var NeoTableParams, mockedAPI, $rootScope, mockedDeferred;

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.components', 'seed.helpers', 'ngTable');

					// Inject service into module
					inject(function (_neoTableParams_, $q, _$rootScope_) {
						NeoTableParams = _neoTableParams_;
						$rootScope = _$rootScope_.$new();

						mockedDeferred = $q.defer();

						mockedAPI = jasmine.createSpyObj('RestmodCollection', ['filter']);
						mockedAPI.filter.and.returnValue(mockedDeferred.promise);
					});

				});

				it('onEmptyConstructorShouldThrowError', function () {
					// GIVEN
					// WHEN
					var result = function () {
						new NeoTableParams();
					};

					// THEN
					expect(result).toThrowError('option "CollectionAPI" must be defined');
				});

				it('onGivenModelShouldReturnBasicConfig', function () {
					// GIVEN
					// WHEN
					var result = new NeoTableParams(mockedAPI);

					// THEN
					expect(result).toBeDefined();
				});

				it('onGivenModelShouldReturnConfigWithDefaultParams', function () {
					// GIVEN
					// WHEN
					var result = new NeoTableParams(mockedAPI);

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
					new NeoTableParams(mockedAPI);

					// THEN
					expect(mockedQueryParams).toBeDefined();
				});

				it('onGivenBeforeResolveFunctionShouldCallItWhenDataIsFetched', function () {
					// GIVEN
					var mockedOnBeforeResolve = jasmine.createSpy('onBeforeResolve');
					var tableParams = new NeoTableParams(mockedAPI, {
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
					var tableParams = new NeoTableParams(mockedAPI, {
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
