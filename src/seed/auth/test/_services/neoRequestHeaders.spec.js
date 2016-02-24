define([
	'angular',
	'angular-mocks',
	'angular-moment',
	'angular-restmod',
	'seed/auth/_includes',
	'seed/auth/module',
	'seed/helpers/_includes',
	'seed/helpers/module'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('service: neoRequestHeaders', function () {

				var $http, neoRequestHeaders;

				beforeEach(function () {

					module(function ($provide) {
						$provide.constant('appConf', {
							generalSettings: {
								defaultRedirectStateAfterLogin: 'app.dashboard'
							},
							languageSettings: {
								defaultLanguage: {
									name: 'English',
									code: 'gb',
									locale: 'en-GB',
									localePOSIX: 'en_GB'
								}
							}
						});
					});

					module('ui.router', 'gettext', 'seed.helpers', 'seed.auth');
				});

				beforeEach(function () {
					inject(function ($injector) {
						neoRequestHeaders = $injector.get('neoRequestHeaders');
						$http = $injector.get('$http');
					});
				});

				describe('method: setAuthToken', function () {
					it('should throw error if token parameter is undefined or null', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoRequestHeaders.setAuthToken(null);
						}).toThrowError();

						expect(function () {
							neoRequestHeaders.setAuthToken(undefined);
						}).toThrowError();
					});

					it('should set header Authorization as default included header', function () {
						// GIVEN
						neoRequestHeaders.setAuthToken('token');

						// WHEN
						// THEN
						expect($http.defaults.headers.common['Authorization']).toEqual('token token');
					});
				});

				describe('method: setCustomerId', function () {
					it('should throw error if customerId parameter is undefined or null', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoRequestHeaders.setCustomerId(null);
						}).toThrowError();

						expect(function () {
							neoRequestHeaders.setCustomerId(undefined);
						}).toThrowError();
					});

					it('should set header X-Customer-Id as default included header', function () {
						// GIVEN
						neoRequestHeaders.setCustomerId('customerId');

						// WHEN
						// THEN
						expect($http.defaults.headers.common['X-Customer-Id']).toEqual('customerId');
					});
				});

				describe('method: setAcceptLanguage', function () {
					it('should throw error if language parameter is undefined or null', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoRequestHeaders.setAcceptLanguage(null);
						}).toThrowError();

						expect(function () {
							neoRequestHeaders.setAcceptLanguage(undefined);
						}).toThrowError();
					});

					it('should set header AcceptLanguage as default included header', function () {
						// GIVEN
						neoRequestHeaders.setAcceptLanguage('en_GB');

						// WHEN
						// THEN
						expect($http.defaults.headers.common['Accept-Language']).toEqual('en_GB');
					});
				});

				describe('method: clearHeaders', function () {
					it('should remove all default included headers', function () {
						// GIVEN
						neoRequestHeaders.setAuthToken('token');
						neoRequestHeaders.setCustomerId('customerId');
						neoRequestHeaders.setAcceptLanguage('en_GB');

						// WHEN
						neoRequestHeaders.clearHeaders();

						// THEN
						expect($http.defaults.headers.common['Authorization']).not.toBeDefined();
						expect($http.defaults.headers.common['X-Customer-Id']).not.toBeDefined();
						expect($http.defaults.headers.common['Accept-Language']).not.toBeDefined();
					});
				});
			});
		});
	});
});

