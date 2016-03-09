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
			describe('interceptor: HttpErrorInterceptor', function () {

				var $http, HttpRequestInterceptor;

				beforeEach(function () {
					module('seed.helpers', 'ui.router');

					inject(function ($injector) {
						$http = $injector.get('$http');
						HttpRequestInterceptor = $injector.get('HttpRequestInterceptor');
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
					var transformedRequest = HttpRequestInterceptor.transformRequest(request);

					// THEN
					expect(transformedRequest.params).toEqual('filters%5Bproperty%5D=value');
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
					var transformedRequest = HttpRequestInterceptor.transformRequest(request);

					// THEN
					expect(transformedRequest.params).toEqual('filters%5Bproperty%5D=value');
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
					var transformedRequest = HttpRequestInterceptor.transformRequest(request);

					// THEN
					expect(transformedRequest.params).toEqual('filters=%7B%22property%22:%22value%22%7D');
				});
			});
		});
	});
});
