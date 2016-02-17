define(['seed/helpers/module'], function (module) {
	'use strict';
	/**
	 * Returns new instance of event aggregator.
	 * @class EventAggregatorFactory
	 * @memberOf seed.helpers
	 *
	 * @example
	 * define(['apps/example/module'], function (module) {
	 * 	'use strict';
	 *
	 * 	function exampleAppEventAggregator(EventAggregatorFactory) {
	 * 		return new EventAggregatorFactory();
	 * 	}
	 *
	 * 	module.service('exampleAppEventAggregator', exampleAppEventAggregator);
	 * });
	 *
	 * @requires $rootScope
	 *
	 * @return EventAggregator {seed.helpers.EventAggregator}
	 *
	 */
	function EventAggregatorFactory($rootScope) {

		/**
		 * Event aggregator allow to create detached from DOM, virtual $rootScopes that
		 * keeps publishing/subscribing events without chained DOM-based emitting/broadcasting.
		 * @constructor seed.helpers.EventAggregator
		 */
		function EventAggregator() {
			/**
			 * @property $eventBus {Object} Instance of virtual scope
			 */
			this.$eventBus = $rootScope.$new(true);
		}

		/**
		 * @method publish
		 * @memberOf seed.helpers.EventAggregator.prototype
		 *
		 * @param name {String} Event name to broadcast.
		 * @param [args] {...*} Optional one or more arguments which will be passed onto the event listeners.
		 */
		EventAggregator.prototype.publish = function (name, args) {
			this.$eventBus.$broadcast(name, args);
		};

		/**
		 * @method subscribe
		 * @memberOf seed.helpers.EventAggregator.prototype
		 *
		 * @param name {String} Event name to listen on.
		 * @param listener {function} Function to call when the event is emitted.
		 * @param [scope] {Object} Scope object to attach listener that will be destroyed along with scope
		 * @returns {function} Returns a deregistration function for this listener.
		 */
		EventAggregator.prototype.subscribe = function (name, scope, listener) {

			var unbind = this.$eventBus.$on(name, listener);

			if (scope) {
				scope.$on('$destroy', function () {
					unbind();
				});
			}
			return unbind;
		};

		return EventAggregator;
	}

	module.factory('EventAggregatorFactory', EventAggregatorFactory);
});

