define([], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: components', function () {
			describe('directive: neoPageTitle', function () {

				var $compile, $rootScope, $stateProvider, $state, appConf;
				var generalSettings = {
					name: 'custom page title'
				};

				beforeEach(function () {
					module(function ($provide) {
						$provide.constant('appConf', {
							generalSettings: generalSettings
						});
					});

					module('ui.router', function ($injector) {
						$stateProvider = $injector.get('$stateProvider');
					});
				});

				beforeEach(function () {
					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$state = $injector.get('$state');
						$rootScope = $injector.get('$rootScope');
						appConf = $injector.get('appConf');
					});
				});

				beforeEach(function () {
					$stateProvider
						.state('emptyTitle', {})
						.state('customTitle', {
							data: {
								title: 'custom state title'
							}
						});
				});

				it('should set page title from general settings', function () {
					// GIVEN
					var scope = $rootScope.$new();
					var element = $compile('<title neo-page-title/>')(scope);

					// WHEN
					$state.go('emptyTitle');

					scope.$digest();

					// THEN
					expect(element.text()).toBe(generalSettings.name);
				});

				it('should set page title passed in toState', function () {
					// GIVEN

					var scope = $rootScope.$new();
					var element = $compile('<title neo-page-title/>')(scope);

					// WHEN
					$state.go('customTitle');

					scope.$digest();

					// THEN
					expect(element.text()).toBe(generalSettings.name + ' | custom state title');
				});
			});
		});
	});
});