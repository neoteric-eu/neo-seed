/**
 * @namespace seed.components
 * @memberof seed
 */

define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.components', ['seed.helpers', 'seed.auth']);

	module.run(function ($log) {
		$log = $log.getInstance('seed.components.module');

		$log.debug('Initiated module');
	});

	return module;
});
