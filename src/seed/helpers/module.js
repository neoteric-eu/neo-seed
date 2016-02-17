/**
 * @namespace seed.helpers
 * @memberOf seed
 */

define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.helpers', []);

	module.run(function ($log) {
		$log = $log.getInstance('seed.tables.module');

		$log.debug('Initiated module');
	});

	return module;
});
