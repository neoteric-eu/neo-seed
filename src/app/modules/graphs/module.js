define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.graphs', []);

	couchPotato.configureApp(module);

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
