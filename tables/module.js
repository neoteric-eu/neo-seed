/**
 * @namespace seed.tables
 * @memberof seed
 */

define([
	'angular',
	'angular-table'
], function (ng) {
	'use strict';

	var module = ng.module('seed.tables', ['ngTable']);

	module.run(function ($log, neoTable) {
		$log = $log.getInstance('seed.tables.module');

		neoTable.init();

		$log.debug('Initiated module');
	});

	return module;
});
