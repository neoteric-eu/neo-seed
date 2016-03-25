define([
  'angular',
  'angular-mocks',
  'seed/components/_includes',
  'seed/components/module',
  'seed/helpers/_includes',
  'seed/helpers/module'
], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: neoFavicon', function () {

        var $compile, $rootScope, $log, appConf;
        var generalSettings = {
          favicon: {
            sizes: '16x16',
            uri: 'http://test.url/favicon.ico'
          }
        };

        beforeEach(function () {
          module(function ($provide) {
            $provide.value('appConf');
          });

          module('seed.components', 'seed.helpers', 'ui.router');
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

        it('should add sizes and href attributes to element', function () {
          // GIVEN
          appConf.generalSettings = generalSettings;
          var scope = $rootScope.$new();
          var element = $compile('<link neo-favicon/>')(scope);

          // WHEN

          // THEN
          expect(element.attr('href')).toBe(generalSettings.favicon.uri);
          expect(element.attr('sizes')).toBe(generalSettings.favicon.sizes);
        });

        it('should set only href attribute', function () {
          // GIVEN
          appConf.generalSettings = {
            favicon: {
              uri: generalSettings.favicon.uri
            }
          };

          var scope = $rootScope.$new();
          var element = $compile('<link neo-favicon/>')(scope);

          // WHEN

          // THEN
          expect(element.attr('href')).toBe(generalSettings.favicon.uri);
          expect(element.attr('sizes')).toBeUndefined();
        });

        it('should remove element when favicon is not available', function () {
          // GIVEN
          appConf.generalSettings = {favicon: undefined};
          var scope = $rootScope.$new();
          var element = $compile('<head><link neo-favicon/></head>')(scope);

          // WHEN
          scope.$digest();

          // THEN
          expect(element.html()).toBe('');
        });

        it('should remove element when favicon has only size set', function () {
          // GIVEN
          appConf.generalSettings = {
            favicon: {
              sizes: generalSettings.favicon.sizes
            }
          };
          var scope = $rootScope.$new();
          var element = $compile('<head><link neo-favicon/></head>')(scope);

          // WHEN
          scope.$digest();

          // THEN
          expect(element.html()).toBe('');
        });
      });
    });
  });
});

