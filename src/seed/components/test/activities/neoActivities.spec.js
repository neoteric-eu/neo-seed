define([
  'seed/components/activities/activities.html'
], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: neoActivities', function () {

        var $compile, $rootScope, $log, $document;
        var scope;

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $log = $injector.get('$log');
            $document = $injector.get('$document');
          });

          scope = $rootScope.$new();
        });

        it('should set tab', function () {
          // GIVEN
          var element = $compile('<neo-activities></neo-activities>')(scope);
          scope.$digest();
          var vm = element.controller('neoActivities');

          // WHEN

          // THEN
          expect(vm.setTab()).toBe(false);
        });

        it('should open ajax dropdown', function () {
          // GIVEN
          var element = $compile('<neo-activities></neo-activities>')(scope);
          scope.$digest();

          // WHEN
          element.trigger('click');

          // THEN
          expect(element.hasClass('active')).toBe(true);
        });

        it('should remove bg-color-red class from badge', function () {
          // GIVEN
          var element = $compile('<neo-activities></neo-activities>')(scope);
          scope.$digest();
          var badge = element.find('.badge');
          badge.addClass('bg-color-red');

          // WHEN
          element.trigger('click');

          // THEN
          expect(badge.hasClass('bg-color-red')).toBe(false);
        });

        it('should close ajax dropdown by clicking on element', function () {
          // GIVEN
          var element = $compile('<neo-activities></neo-activities>')(scope);
          scope.$digest();

          var dropdown = element.find('.ajax-dropdown');
          dropdown.show();

          // WHEN
          element.trigger('click');

          // THEN
          expect(element.hasClass('active')).toBe(false);
        });

        it('should close ajax dropdown by clicking on document', function () {
          // GIVEN
          var element = $compile('<neo-activities></neo-activities>')(scope);
          scope.$digest();

          var dropdown = element.find('.ajax-dropdown');
          dropdown.show();

          // WHEN
          $document.triggerHandler({
            type : 'mouseup',
            target: 'body',
          });

          // THEN
          expect(element.hasClass('active')).toBe(false);
        });
      });
    });
  });
});

