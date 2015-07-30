define([
	'angular',
	'angular-couch-potato',
	'angular-table'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('seed.components', ['ngTable']);

	couchPotato.configureApp(module);

	module.run(function ($couchPotato, neoTable) {
		neoTable.init();
		module.lazy = $couchPotato;
	});

	return module;
});
