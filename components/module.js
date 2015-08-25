/**
 * @namespace seed.components
 * @memberof seed
 */

define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.components', []);

	module.run(function ($log, neoTable) {
		$log = $log.getInstance('seed.components.module');

		neoTable.init();

		$log.debug('Initiated module');
	});

	return module;
});
