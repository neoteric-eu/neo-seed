define([
	'angular',
	'angular-mocks',
	'angular-ui-router',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('interceptor: HttpRequestInterceptor', function () {

				var $http, HttpRequestInterceptor, $httpParamSerializer, $httpParamSerializerJQLike;

				beforeEach(function () {
					module('seed.helpers', 'ui.router');

					inject(function ($injector) {
						$http = $injector.get('$http');
						HttpRequestInterceptor = $injector.get('HttpRequestInterceptor');
						$httpParamSerializer = $injector.get('$httpParamSerializer');
						$httpParamSerializerJQLike = $injector.get('$httpParamSerializerJQLike');
					});
				});

				it('should transform query params in JQLike style for API in version 1.0', function () {
					// GIVEN
					var request = {
						url: 'http://example-api.com/api/v1',
						params: {
							filters: {
								property: 'value'
							}
						}
					};

					// WHEN
					var transformedRequest = HttpRequestInterceptor.request(request);

					// THEN
					expect(transformedRequest.paramSerializer).toEqual($httpParamSerializerJQLike);
				});

				it('should transform query params in JQLike style for API in version 2.0', function () {
					// GIVEN
					var request = {
						url: 'http://example-api.com/api/v2',
						params: {
							filters: {
								property: 'value'
							}
						}
					};

					// WHEN
					var transformedRequest = HttpRequestInterceptor.request(request);

					// THEN
					expect(transformedRequest.paramSerializer).toEqual($httpParamSerializerJQLike);
				});

				it('should transform query params in JQLike style for API in version 3.0', function () {
					// GIVEN
					var request = {
						url: 'http://example-api.com/api/v3',
						params: {
							filters: {
								property: 'value'
							}
						}
					};

					// WHEN
					var transformedRequest = HttpRequestInterceptor.request(request);

					// THEN
					expect(transformedRequest.paramSerializer).toEqual($httpParamSerializer);
				});
			});
		});
	});
});
