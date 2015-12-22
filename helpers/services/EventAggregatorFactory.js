define(['seed/helpers/module'], function (module) {
	'use strict';

	function EventAggregatorFactory($rootScope) {

		function EventAggregator() {
			this.$eventBus = $rootScope.$new(true);
		}

		EventAggregator.prototype.publish = function(name, args) {
			this.$eventBus.$broadcast(name, args);
		};

		EventAggregator.prototype.subscribe = function(name, scope, listener) {

			var unbind = this.$eventBus.$on(name, listener);

			if (scope) {
				scope.$on('$destroy', function() {
					unbind();
				});
			}
			return unbind;
		};

		return EventAggregator;
	}

	module.factory('EventAggregatorFactory', EventAggregatorFactory);
});

