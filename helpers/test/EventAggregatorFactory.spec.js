define([
	'lodash-extensions',
	'angular',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			fdescribe('factory: EventAggregatorFactory', function () {

				var EventAggregatorFactory, rootScope ;

				beforeEach(function () {
					module('seed.helpers');
					inject(function ($injector) {
						EventAggregatorFactory = $injector.get('EventAggregatorFactory');
						rootScope = $injector.get('$rootScope');
					});
				});

				afterEach(function () {
				});

				it('should call a handler', inject(function () {

					var vent = new EventAggregatorFactory();
					var handler = jasmine.createSpy('handler');

					vent.subscribe('someEvent', null, function() {
						handler();
					});
					vent.publish('someEvent');
					expect(handler).toHaveBeenCalled();
				}));

				it('should not call a handler bind to rootScope', inject(function () {

					var vent = new EventAggregatorFactory();

					var handler = jasmine.createSpy();
					var handlerOnRootScope  = jasmine.createSpy();

					vent.subscribe('someEvent', null, handler);
					rootScope.$on('someEvent', handlerOnRootScope);
					vent.publish('someEvent');

					expect(handler).toHaveBeenCalled();
					expect(handlerOnRootScope).not.toHaveBeenCalled();
				}));

				it('should unbind event handler when the scope is destroyed', inject(function () {

					var vent = new EventAggregatorFactory();
					var scope1 = rootScope.$new();
					var scope2 = rootScope.$new();
					var cnt1 = 0, cnt2 = 0;
					var handler1 = function () { cnt1 += 1  };
					var handler2 = function () { cnt2 += 1  };

					vent.subscribe('someEvent', scope1, handler1);
					vent.subscribe('someEvent', scope2, handler2);

					vent.publish('someEvent');
					scope1.$destroy();
					vent.publish('someEvent');

					expect(cnt1).toBe(1);
					expect(cnt2).toBe(2);
				}));

				it('should instantiate service', inject(function (EventAggregatorService) {

					expect(EventAggregatorService.publish).toBeDefined();
					expect(EventAggregatorService.subscribe).toBeDefined();

				}));


			});
		});
	});
});
