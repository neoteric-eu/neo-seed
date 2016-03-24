define([
  'seed/components/breadcrumbs/neoStateBreadcrumbs.html'
], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: neoStateBreadcrumbs', function () {

        var $compile, $rootScope, $log, $state, $stateProvider;
        var currentStateData = {
          title: 'testStateTitle',
          breadcrumbs: [
            {
              stateName: 'test',
              title: 'testTitle'
            }
          ]
        };

        var toStateData = {
          title: 'testStateTitle2',
          breadcrumbs: [
            {
              stateName: 'test2',
              title: 'testTitle2'
            }
          ]
        };

        beforeEach(function () {
          module('ui.router', function ($injector) {
            $stateProvider = $injector.get('$stateProvider');
          });
        });

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $log = $injector.get('$log');
            $state = $injector.get('$state');
          });
        });

        it('should process current state, which contain breadcrumb, on init', function () {
          // GIVEN
          $state.current = {
            data: currentStateData
          };

          $stateProvider
            .state('test', {
              url: '/test',
              data: currentStateData
            });

          // WHEN
          var scope = $rootScope.$new();
          var element = $compile('<neo-state-breadcrumbs></neo-state-breadcrumbs>')(scope);
          scope.$digest();

          var vm = element.controller('neoStateBreadcrumbs');

          // THEN
          expect(vm.crumbs[0].stateName).toBe(currentStateData.breadcrumbs[0].stateName);
          expect(vm.crumbs[0].title).toBe(currentStateData.breadcrumbs[0].title);
        });

        it('should process current state, without breadcrumb data, on init', function () {
          // GIVEN
          $state.current = {
            name: 'test'
          };

          // WHEN
          var scope = $rootScope.$new();
          var element = $compile('<neo-state-breadcrumbs></neo-state-breadcrumbs>')(scope);
          scope.$digest();

          var vm = element.controller('neoStateBreadcrumbs');

          // THEN
          expect(vm.crumbs).toEqual([]);
        });

        it('should process state when state has changed', function () {
          // GIVEN
          $state.current = {
            data: currentStateData
          };

          $stateProvider
            .state('test', {
              url: '/test',
              data: currentStateData
            })
            .state('test2', {
              url: '/test2',
              data: toStateData
            });

          var scope = $rootScope.$new();
          var element = $compile('<neo-state-breadcrumbs></neo-state-breadcrumbs>')(scope);
          scope.$digest();

          var vm = element.controller('neoStateBreadcrumbs');

          // WHEN
          $rootScope.$broadcast('$stateChangeStart', {name: 'test2'});
          scope.$digest();

          // THEN
          expect(vm.crumbs[0].stateName).toBe(toStateData.breadcrumbs[0].stateName);
          expect(vm.crumbs[0].title).toBe(toStateData.title);
        });

        it('should fetch breadcrumbs for parent state', function () {
          // GIVEN
          $stateProvider
            .state('test', {
              url: '/test',
              data: currentStateData
            })
            .state('test.test2', {
              url: '/test2',
              data: toStateData
            });

          $state.current = {
            data: currentStateData
          };

          var scope = $rootScope.$new();
          var element = $compile('<neo-state-breadcrumbs></neo-state-breadcrumbs>')(scope);
          scope.$digest();

          var vm = element.controller('neoStateBreadcrumbs');

          // WHEN
          $rootScope.$broadcast('$stateChangeStart', {name: 'test.test2'});
          scope.$digest();

          expect(vm.crumbs.length).toBe(2);
          expect(vm.crumbs[0].stateName).toBe(currentStateData.breadcrumbs[0].stateName);
          expect(vm.crumbs[1].stateName).toBe(currentStateData.breadcrumbs[0].stateName + '.' + toStateData.breadcrumbs[0].stateName);
        });
      });
    });
  });
});

