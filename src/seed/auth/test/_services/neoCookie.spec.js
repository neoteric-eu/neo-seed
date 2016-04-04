define([], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('service: neoCookie', function () {

				/**
				 * @type {seed.auth.neoCookie}
				 */
				var neoCookie;
				var $cookies;

				beforeEach(function () {
					inject(function ($injector) {
						neoCookie = $injector.get('neoCookie');
						$cookies = $injector.get('$cookies');
					});
				});

				afterEach(function () {
					neoCookie.removeToken();
					neoCookie.removeLanguage();
					neoCookie.removeCustomer();
					neoCookie.removeCookieConsent();
				});

				describe('method: getCustomer', function () {
					it('should remove previously stored object if present and return nothing', function () {
						// GIVEN
						$cookies.putObject('activeCustomer', 'exampleCustomerId');

						// WHEN
						var customerId = neoCookie.getCustomer();

						// THEN
						expect(customerId).toBeUndefined();
					});
				});

				describe('method: setCustomer', function () {
					it('should throw error when parameter "customerId" is not String', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoCookie.setCustomer({});
						}).toThrowError('Parameter "customerId" must be String');
					});

					it('should update "activeCustomer" value in cookie', function () {
						// GIVEN
						spyOn($cookies, 'put');

						// WHEN
						neoCookie.setCustomer('exampleCustomerId');

						// THEN
						expect($cookies.put).toHaveBeenCalledWith('activeCustomer', 'exampleCustomerId');
					});
				});

				describe('method: getToken', function () {
					it('should remove previously stored object if present and return nothing', function () {
						// GIVEN
						$cookies.putObject('token', 'exampleCustomerId');

						// WHEN
						var token = neoCookie.getToken();

						// THEN
						expect(token).toBeUndefined();
					});
				});

				describe('method: setToken', function () {
					it('should throw error when parameter "token" is not String', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoCookie.setToken({});
						}).toThrowError('Parameter "token" must be String');
					});

					it('should update "token" value in cookie', function () {
						// GIVEN
						spyOn($cookies, 'put');

						// WHEN
						neoCookie.setToken('exampleToken');

						// THEN
						expect($cookies.put).toHaveBeenCalledWith('token', 'exampleToken');
					});
				});

				describe('method: getLanguage', function () {
					it('should remove previously stored object if present and return nothing', function () {
						// GIVEN
						$cookies.putObject('lang', 'exampleLanguage');

						// WHEN
						var language = neoCookie.getLanguage();

						// THEN
						expect(language).toBeUndefined();
					});
				});

				describe('method: setLanguage', function () {
					it('should throw error when parameter "locale" is not String', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoCookie.setLanguage({});
						}).toThrowError('Parameter "locale" must be String');
					});

					it('should update "lang" value in cookie', function () {
						// GIVEN
						spyOn($cookies, 'put');

						// WHEN
						neoCookie.setLanguage('exampleLanguage');

						// THEN
						expect($cookies.put).toHaveBeenCalledWith('lang', 'exampleLanguage');
					});
				});

				describe('method: getCookieConsent', function () {
					it('should return serialized boolean value from cookie', function () {
						// GIVEN
						$cookies.putObject('cookieConsent', true);

						// WHEN
						var cookieConsent = neoCookie.getCookieConsent();

						// THEN
						expect(cookieConsent).toEqual(true);
					});
				});

				describe('method: setCookieConsent', function () {
					it('should throw error when parameter "cookieConsent" is not Boolean', function () {
						// GIVEN
						// WHEN
						// THEN
						expect(function () {
							neoCookie.setCookieConsent({});
						}).toThrowError('Parameter "cookieConsent" must be Boolean');
					});

					it('should update "cookieConsent" value in cookie', function () {
						// GIVEN
						spyOn($cookies, 'put');

						// WHEN
						neoCookie.setCookieConsent(true);

						// THEN
						expect($cookies.put).toHaveBeenCalledWith('cookieConsent', 'true', undefined);
					});
				});
			});
		});
	});
});

