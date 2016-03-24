define([
  'angular',
  'angular-mocks',
  'seed/components/_includes',
  'seed/components/module',
  'seed/helpers/_includes',
  'seed/components/cookieConsent/cookieConsent.html'
], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: cookieConsent', function () {

        var $compile, $rootScope, $log, $cookies;
        var scope, element, vm;

        beforeEach(function () {
          module('seed.components');
        });

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $log = $injector.get('$log');
            $cookies = $injector.get('$cookies');
          });

          scope = $rootScope.$new();
          $cookies.remove('cookieConsent');
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
          expect($cookies.getObject('cookieConsent')).toBe(true);
          expect(element[0].style.display).toBe('none');
        });

        it('should hide element on init if cookie is present', function () {
          // GIVEN
          $cookies.putObject('cookieConsent', true);

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

