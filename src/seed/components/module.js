define([
	'angular',
	'angular-table'
], function (ng) {
	'use strict';

	var module = ng.module('seed.components', ['ngTable']);

	module.run(function ($log, neoTable) {
		$log = $log.getInstance('seed.components.module');

		neoTable.init();

		$log.debug('Initiated module');
	});

	return module;
});
