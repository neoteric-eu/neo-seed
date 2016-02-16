define([
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('decorator: logDecorator', function () {

				var $log;

				beforeEach(function () {
					module('seed.helpers');

					inject(function ($injector) {
						$log = $injector.get('$log');
					});
				});

				it('should decorate logs when set instance', function () {
					// GIVEN
					$log = $log.getInstance('SampleInstance');

					// WHEN
					$log.debug('debug');
					$log.info('info');
					$log.log('log');
					$log.warn('warn');
					$log.error('error');

					// THEN
					expect(_.endsWith($log.debug.logs[0][0], 'SampleInstance :: debug')).toBeTruthy();
					expect(_.endsWith($log.info.logs[0][0], 'SampleInstance :: info')).toBeTruthy();
					expect(_.endsWith($log.log.logs[0][0], 'SampleInstance :: log')).toBeTruthy();
					expect(_.endsWith($log.warn.logs[0][0], 'SampleInstance :: warn')).toBeTruthy();
					expect(_.endsWith($log.error.logs[0][0], 'SampleInstance :: error')).toBeTruthy();
				});
			});
		});
	});
});
