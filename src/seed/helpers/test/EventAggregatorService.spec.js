define([
	'angular',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('factory: EventAggregatorFactory', function () {

				var rootScope, EventAggregatorService;

				beforeEach(function () {
					module('seed.helpers');

					inject(function ($injector) {
						rootScope = $injector.get('$rootScope');
						EventAggregatorService = $injector.get('EventAggregatorService');
					});
				});

				it('should instantiate service', function () {
					expect(EventAggregatorService.publish).toBeDefined();
					expect(EventAggregatorService.subscribe).toBeDefined();
				});
			});
		});
	});
});
