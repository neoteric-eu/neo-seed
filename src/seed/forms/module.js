define([
	'angular',
	'angular-couch-potato',
	'form-validation',
	'form-validation-bootstrap'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('seed.forms', []);

	couchPotato.configureApp(module);

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
