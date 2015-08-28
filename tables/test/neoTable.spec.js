define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('service: neoTable', function () {

				var neoTable, $httpBackend, $templateCache, $log;

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.tables', 'seed.helpers');

					module(function ($provide) {
						$templateCache = jasmine.createSpyObj('$templateCache', ['get', 'put']);
						$provide.value('$templateCache', $templateCache);
					});

					// Inject service into module
					inject(function ($injector) {
						neoTable = $injector.get('neoTable');
						$httpBackend = $injector.get('$httpBackend');
						$log = $injector.get('$log');
					});

				});

				it('should populate template cache on init', function () {
					// GIVEN

					// WHEN
					neoTable.init();

					// THEN
					expect($templateCache.put).toHaveBeenCalled();
					expect($log.error.logs.length).toBe(0);
				});

				it('should log error when template is not available', function () {
					// GIVEN
					$httpBackend.whenGET(/.*/).respond(404);

					// WHEN
					neoTable.init();

					$httpBackend.flush();
					// THEN
					expect($log.error.logs.length).toBeGreaterThan(0);
				});
			});
		});
	});
});
