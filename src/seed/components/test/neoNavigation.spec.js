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
			describe('directive: neoNavigation', function () {

				var $compile, $rootScope, $log, $q, neoTemplateLoader;

				beforeEach(function () {
					module(function($provide) {
						$provide.constant('appConf', {
							appsSettings: [
								{
									dependency: 'fake-2',
									directory: 'two',
									order: 1
								},
								{
									dependency: 'fake-1',
									directory: 'one',
									order: 0
								},
								{
									dependency: 'fake-3',
									directory: 'no-navigation'
								}]
						});
					});

					module('seed.components', 'seed.helpers', 'ui.router');
				});

				beforeEach(function () {
					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						$q = $injector.get('$q');
						neoTemplateLoader = $injector.get('neoTemplateLoader');
					});
				});

				it('should return templates in order', function () {
					// GIVEN
					spyOn(neoTemplateLoader, 'load').and.callFake(function(path){
						return $q.resolve(path.split('/')[1]);
					});

					var scope = $rootScope.$new();
					var element = $compile('<neo-navigation></neo-navigation>')(scope);
					var vm = element.controller('neoNavigation');

					// WHEN
					scope.$digest();

					// THEN
					expect(_.pluck(vm.templatePromises, '$$state.value')).toEqual(['one','two']);
				});

				it('should filter applications without order property', function () {
					// GIVEN
					spyOn(neoTemplateLoader, 'load').and.callFake(function(path){
						return $q.resolve(path.split('/')[1]);
					});

					var scope = $rootScope.$new();
					var element = $compile('<neo-navigation></neo-navigation>')(scope);
					var vm = element.controller('neoNavigation');

					// WHEN
					scope.$digest();

					// THEN
					expect(vm.templatePromises.length).toBe(2);
				});

				it('should log an error if could not load templates', function () {
					// GIVEN
					spyOn(neoTemplateLoader, 'load').and.callFake(function(){
						return $q.reject();
					});

					var scope = $rootScope.$new();
					$compile('<neo-navigation></neo-navigation>')(scope);

					// WHEN
					scope.$digest();

					// THEN
					expect($log.error.logs.length).toBe(1);
					expect($log.error.logs[0][0]).toEndWith('Error loading navigation templates');
				});
			});
		});
	});
});

