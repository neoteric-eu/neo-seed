define([
	'seed/components/cookieConsent/cookieConsent.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: components', function () {
			describe('directive: cookieConsent', function () {

				var $compile, $rootScope, $log, neoCookie;
				var scope, element, vm;

				beforeEach(function () {
					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						neoCookie = $injector.get('neoCookie');
					});

					scope = $rootScope.$new();
				});

				afterEach(function () {
					neoCookie.clearCookie();
				});

				it('should contain init and acceptCookies methods', function () {
					// GIVEN
					element = $compile('<cookie-consent></cookie-consent>')(scope);
					scope.$digest();
					vm = element.controller('cookieConsent');

					// WHEN

					// THEN
					expect(vm.init).toBeDefined();
					expect(vm.acceptCookies).toBeDefined();
				});

				it('should hide element when accepting cookies policy', function () {
					// GIVEN
					element = $compile('<cookie-consent></cookie-consent>')(scope);
					scope.$digest();
					vm = element.controller('cookieConsent');

					// WHEN
					vm.acceptCookies();
					scope.$digest();

					// THEN
					expect(neoCookie.getCookieConsent()).toBe(true);
					expect(element[0].style.display).toBe('none');
				});

				it('should hide element on init if cookie is present', function () {
					// GIVEN
					neoCookie.setCookieConsent(true);

					element = $compile('<cookie-consent></cookie-consent>')(scope);
					scope.$digest();
					vm = element.controller('cookieConsent');

					// WHEN

					// THEN
					expect(element[0].style.display).toBe('none');
				});
			});
		});
	});
});

