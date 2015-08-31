define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/module',
	'seed/helpers/_includes',
	'seed/tables/partials/neo-filters.html',
	'seed/tables/partials/neo-footer.html',
	'seed/tables/partials/neo-header.html',
	'seed/tables/partials/neo-sorting.html',
	'seed/tables/filters/date-filter.html',
	'seed/tables/filters/enum-filter.html',
	'seed/tables/filters/related-filter.html',
	'seed/tables/filters/text-filter.html',
	'seed/tables/filters/timestamp-filter.html',
	'seed/tables/_directives/neoTableDateFilter/neoTableDateFilter.html',
	'seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter.html',
	'seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter.html'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('service: neoTable', function () {

				var neoTable, $templateCache, $log;

				beforeEach(function () {
					// Instantiate the fake module
					module(
						'gettext',
						'seed.templates'
					);
				});

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
					expect($log.debug.logs.length).toBeGreaterThan(0);
				});

				it('should log error when template is not available', function () {
					// GIVEN

					// WHEN
					neoTable.init();

					// THEN
					expect($log.error.logs.length).toBe(0);
					expect($log.debug.logs.length).toBeGreaterThan(0);
				});
			});
		});
	});
});
