define([
	'lodash-extensions',
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('enum: BaseEnum', function () {

				var $log, BaseEnum;

				beforeEach(function () {
					module('seed.helpers');

					inject(function ($injector) {
						BaseEnum = $injector.get('BaseEnum');
						$log = $injector.get('$log');
						$log.reset();
					});

				});

				it('should freeze provided enumerable object', function () {
					// GIVEN
					var mockedEnumerable = {};
					// WHEN
					var sut = new BaseEnum(mockedEnumerable);
					// THEN
					expect(Object.isFrozen(sut)).toBeTruthy();
				});

				it('should return enum as iterable array', function () {
					// GIVEN
					var mockedEnumerable = {FIRST: {label: 'First'}};
					// WHEN
					var sut = new BaseEnum(mockedEnumerable);
					// THEN
					expect(sut.getEnumAsArray()).toBeArray();
				});

				it('should properly group by properties', function () {
					// GIVEN
					var mockedEnumerable = {FIRST: {label: 'First'}};
					// WHEN
					var sut = new BaseEnum(mockedEnumerable).groupBy('label');
					// THEN
					expect(sut).toBeNonEmptyObject();
					expect(sut).toHaveMember('First');
				});

				it('should find key by value', function () {
					// GIVEN
					var mockedEnumerable = {FIRST: {label: 'First'}};
					// WHEN
					var sut = new BaseEnum(mockedEnumerable).getKeyByValue(mockedEnumerable.FIRST);
					// THEN
					expect(sut).toBeString();
					expect(sut).toBe('FIRST');
				});

				it('should log error when looked-up value is not object', function () {
					// GIVEN
					// WHEN
					new BaseEnum({}).getKeyByValue(null);
					// THEN
					expect($log.error.logs.length).toBe(1);
				});


				it('should find value by key', function () {
					// GIVEN
					var mockedEnumerable = {FIRST: {label: 'First'}};
					// WHEN
					var sut = new BaseEnum(mockedEnumerable).getValueByKey('FIRST');
					// THEN
					expect(sut).toBeObject();
					expect(sut).toBe(mockedEnumerable.FIRST);
				});

				it('should log error when looked-up key is not found', function () {
					// GIVEN
					// WHEN
					new BaseEnum({}).getValueByKey('NON_EXISTING_KEY');
					// THEN
					expect($log.error.logs.length).toBe(1);
				});

				it('should log error when looked-up key is not string', function () {
					// GIVEN
					// WHEN
					new BaseEnum({}).getValueByKey(null);
					// THEN
					expect($log.error.logs.length).toBe(2);
				});
			});
		});
	});
});
