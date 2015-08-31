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
			describe('interceptor: HttpRequestInterceptor', function () {

				var $state, $log, $q, HttpRequestInterceptor;

				beforeEach(function () {
					module('seed.helpers', 'ui.router');

					inject(function ($injector) {
						$log = $injector.get('$log');
						$state = $injector.get('$state');
						$q = $injector.get('$q');
						HttpRequestInterceptor = $injector.get('HttpRequestInterceptor');
					});
				});

				it('should not append params if not provided', function () {
					// GIVEN
					var requestConfig = {url: 'fakeUrl', params: {}};

					// WHEN
					HttpRequestInterceptor.request(requestConfig);

					// THEN
					expect(requestConfig.url).toBe('fakeUrl');
				});

				it('should serialized appended params', function () {
					// GIVEN
					var requestConfig = {
						url: 'fakeUrl',
						params: {
							array: ['one', 'two'],
							object: {'one': 'one'}
						}
					};

					// WHEN
					HttpRequestInterceptor.request(requestConfig);

					// THEN
					expect(requestConfig.url).toBe('fakeUrl?array%5B%5D=one&array%5B%5D=two&object%5Bone%5D=one');
				});

				it('should log error when can not serialize params', function () {
					// GIVEN
					var requestConfig = {
						url: 'fakeUrl',
						params: new Error()
					};
					spyOn($, 'param').and.throwError(Error('Mocked error'));

					// WHEN
					HttpRequestInterceptor.request(requestConfig);

					// THEN
					expect($log.error.logs.length).toBe(1);
				});
			});
		});
	});
});
