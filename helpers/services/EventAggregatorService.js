define(['seed/helpers/module'], function (module) {
	'use strict';

	function EventAggregatorService(EventAggregatorFactory) {
		var instance = new EventAggregatorFactory();
		return instance;
	}

	module.service('EventAggregatorService', EventAggregatorService);
});

