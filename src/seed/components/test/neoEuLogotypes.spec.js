define([
  'angular',
  'angular-mocks',
  'seed/components/_includes',
  'seed/components/module',
  'seed/helpers/_includes',
  'seed/helpers/module',
  'seed/components/euLogotypes/neoEuLogotypes.html'
], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: neoEuLogotypes', function () {

        var $compile, $rootScope, $log;

        beforeEach(function () {
          module('seed.components');
        });

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
          });
        });

        fit('should should render EU logotypes', function () {
          // GIVEN
          var scope = $rootScope.$new();
          var element = $compile('<neo-eu-logotypes></neo-eu-logotypes>')(scope);

          // WHEN
          scope.$digest();

          // THEN
          expect(angular.element(element.find('img')[0]).attr('src')).toBe('assets/seed/img/euLogotypes/eu-rozwoj-logo.jpg');
          expect(angular.element(element.find('img')[1]).attr('src')).toBe('assets/seed/img/euLogotypes/eu-ig-logo.jpg');
          expect(element.find('p')).toBeDefined();
        });
      });
    });
  });
});

