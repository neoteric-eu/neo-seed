/**
 * Created by hp on 2015-09-02.
 */
/**
 * Created by kobalka 2015-08-27.
 */

define([
	'angular',
	'angular-mocks',
	'seed/forms/module',
	'seed/forms/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: forms', function () {
			describe('directive: neoSelect', function () {

				var neoSelect, $templateCache, $injector, $log;

				beforeEach(function () {
					// Instantiate the fake module with all templates
					// this is required so angular won't try to load template from the server
					// templates are preprocessed by karma-ng-html2js-preprocessor - see karma.conf.js
					module(
						'seed.templates'
					);
				});

				beforeEach(function () {
					// Instantiate the fake module
					module('seed.forms', 'seed.helpers');

					module(function ($provide) {
						$templateCache = jasmine.createSpyObj('$templateCache', ['get', 'put']);
						$provide.value('$templateCache', $templateCache);
					});

					// Inject service into module
					inject(function (_$injector_) {
						$injector = _$injector_ ;
						$log = $injector.get('$log');
						neoSelect = $injector.get('neoSelect');
					});
				});

				it('should populate template cache on init', function () {
					// GIVEN

					// WHEN
					neoSelect.init();

					// THEN
					expect($templateCache.put).toHaveBeenCalled();
					expect($log.error.logs.length).toBe(0);
					expect($log.debug.logs.length).toBeGreaterThan(0);
				});
			});
		});
	});
});


