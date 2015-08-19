define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.forms', []);

	module.run(function ($log, neoSelect) {
		$log = $log.getInstance('seed.forms');

		neoSelect.init();

		$log.debug('Initiated module');
	});

	return module;
});
