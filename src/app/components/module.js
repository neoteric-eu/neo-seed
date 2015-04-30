define([
	'angular',
	'angular-couch-potato',
	'angular-table'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.components', ['ngTable']);

	module.constant('componentsConf', {
		MODULE_PATH: 'app/components'
	});

	couchPotato.configureApp(module);

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
