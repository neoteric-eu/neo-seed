define([], function () {
  'use strict';

  describe('module: seed', function () {
    describe('module: components', function () {
      describe('directive: bigBreadcrumbs', function () {

        var $compile, $rootScope, $log;
        var scope;

        beforeEach(function () {
          // Inject service into module
          inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $log = $injector.get('$log');
          });

          scope = $rootScope.$new();
        });

        it('should create big breadcrumbs with icon', function () {
          // GIVEN
          scope.items =  [
            'test',
            'test2',
            'test3'
          ];
          var element = $compile('<big-breadcrumbs icon="test-icon" items="items"></big-breadcrumbs>')(scope);

          // WHEN
          scope.$digest();

          // THEN
          expect(element.text().trim()).toBe('test > test2 > test3');
          expect(element.find('span').length).toBe(2);
          expect(element.find('i').attr('class')).toBe('fa-fw fa fa-test-icon');
        });

        it('should create big breadcrumbs with default icon', function () {
          // GIVEN
          scope.items = ['test'];
          var element = $compile('<big-breadcrumbs items="items"></big-breadcrumbs>')(scope);

          // WHEN
          scope.$digest();

          // THEN
          expect(element.text().trim()).toBe('test');
          expect(element.find('span').length).toBe(0);
          expect(element.find('i').attr('class')).toBe('fa-fw fa fa-home');
        });
      });
    });
  });
});

