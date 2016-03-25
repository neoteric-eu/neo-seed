define([
	'seed/components/versionTag/neoVersionTag.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: components', function () {
			describe('directive: neoPageTitle', function () {

				var $compile, $rootScope, $log, appConf;
				var generalSettings = {
					version: '1.0',
					ciBuildNumber: '1234'
				};

				beforeEach(function () {
					module(function ($provide) {
						$provide.value('appConf');
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

				it('should display version tag with version and ci build version', function () {
					// GIVEN
					appConf.generalSettings = generalSettings;
					var scope = $rootScope.$new();
					var element = $compile('<neo-version-tag/>')(scope);

					// WHEN
					scope.$digest();

					// THEN
					expect(element.text().indexOf('ver: ' + generalSettings.version)).toBeGreaterThan(-1);
					expect(element.find('span').text()).toBe('(#' + generalSettings.ciBuildNumber + ')');
				});

				it('should display only version tag', function () {
					// GIVEN
					appConf.generalSettings = {
						version: generalSettings.version
					};
					var scope = $rootScope.$new();
					var element = $compile('<neo-version-tag/>')(scope);

					// WHEN
					scope.$digest();

					// THEN
					expect(element.text().indexOf('ver: ' + generalSettings.version)).toBeGreaterThan(-1);
					expect(element.find('span').length).toBe(0);
				});
			});
		});
	});
});