define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/tables/module',
	'seed/tables/_includes',
	'seed/helpers/_includes',
	'seed/helpers/decorators/logDecorator'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: tables', function () {
			describe('service: NeoTable', function () {

				var neoTable, $httpBackend, $templateCache;

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
					});

				});

				it('onInitShouldPopulateTemplateCache', function () {
					// GIVEN
					$httpBackend.whenGET(/.*/).respond(201, '');
					// WHEN
					neoTable.init();

					$httpBackend.flush();
					// THEN
					expect($templateCache.get).toHaveBeenCalled();
				});
			});
		});
	});
});
