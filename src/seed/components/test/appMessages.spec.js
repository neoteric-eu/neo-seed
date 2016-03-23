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
			describe('service: appMessages', function () {

				var $compile, $rootScope, $log, appMessages;

				beforeEach(function () {
					module('seed.components');
				});

				beforeEach(function () {
					// Inject service into module
					inject(function ($injector) {
						$compile = $injector.get('$compile');
						$rootScope = $injector.get('$rootScope');
						$log = $injector.get('$log');
						appMessages = $injector.get('appMessages');
					});
				});

				it('should should call success message', function () {
					spyOn(appMessages, 'set').and.callThrough();
					appMessages.success('test');

					expect(appMessages.set).toHaveBeenCalledWith(appMessages.type.success.key, 'test');
				});

				it('should should call warning message', function () {
					spyOn(appMessages, 'set').and.callThrough();
					appMessages.warning('test');

					expect(appMessages.set).toHaveBeenCalledWith(appMessages.type.warning.key, 'test');
				});

				it('should should call error message', function () {
					spyOn(appMessages, 'set').and.callThrough();
					appMessages.error('test');

					expect(appMessages.set).toHaveBeenCalledWith(appMessages.type.error.key, 'test');
				});

				it('should set message and get message', function () {
					var message;

					appMessages.set(appMessages.type.success.key, 'This is message');
					message = appMessages.get(appMessages.type.success.key);

					expect(message.message).toBe('This is message');
					expect(message.boxType).toBe(appMessages.boxEnums.SMALL);

					message = appMessages.get(appMessages.type.success.key);
					expect(message).toBe(false);
				});

				it('should return false when no messages are available', function () {
					expect(appMessages.getAll(appMessages.type.success.key)).toBe(false);
				});

				it('should return all messages for given type and then empty messages list', function () {
					var allMessages;
					
					appMessages.set(appMessages.type.success.key, 'This is test');

					allMessages = appMessages.getAll(appMessages.type.success.key);
					expect(allMessages).toBeArray();
					expect(allMessages.length).toBe(1);
					
					expect(appMessages.getAll(appMessages.type.success.key)).toBe(false);
				});
			});
		});
	});
});

