define(['angular', 'smartwidgets'], function (ng) {
	'use strict';

	var module = ng.module('seed.widgets', []);

	module.run(function ($log) {
		$log = $log.getInstance('seed.widgets.module');

		$log.debug('Initiated module');
	});


	return module;
});
