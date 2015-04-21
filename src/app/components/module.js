define([
	'angular',
	'angular-couch-potato',
	'angular-templates'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.components', []);

	couchPotato.configureApp(module);

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
