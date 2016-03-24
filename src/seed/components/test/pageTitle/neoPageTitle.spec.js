define([], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: neoPageTitle', function () {

        var $compile, $rootScope, $log, appConf;
        var generalSettings = {
          name: 'custom page title'
        };

        beforeEach(function () {
          module(function ($provide) {
            $provide.constant('appConf', {
              generalSettings: generalSettings
            });
          });
        });

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $log = $injector.get('$log');
            appConf = $injector.get('appConf');
          });
        });

        it('should set page title from general settings', function () {
          // GIVEN
          var scope = $rootScope.$new();
          var element = $compile('<title neo-page-title/>')(scope);

          // WHEN
          $rootScope.$broadcast('$stateChangeStart', {});

          scope.$digest();

          // THEN
          expect(element.text()).toBe(generalSettings.name);
        });

        it('should set page title passed in toState', function () {
          // GIVEN
          var scope = $rootScope.$new();
          var element = $compile('<title neo-page-title/>')(scope);

          // WHEN
          $rootScope.$broadcast('$stateChangeStart', {
            data: {
              title: 'custom state title'
            }
          });

          scope.$digest();

          // THEN
          expect(element.text()).toBe(generalSettings.name + ' | custom state title');
        });
      });
    });
  });
});