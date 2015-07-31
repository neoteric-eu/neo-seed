define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {
	'use strict';

	var module = ng.module('app.demo', [
		'scs.couch-potato',

		'app.demo.auth',
		'app.demo.chat',
		'app.demo.dashboard',
		'app.demo.calendar',
		'app.demo.inbox',
		'app.demo.graphs',
		'app.demo.tables',
		'app.demo.forms',
		'app.demo.ui',
		'app.demo.widgets',
		'app.demo.maps',
		'app.demo.misc',
		'app.demo.smartAdmin'
	]);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.demo', {
				url: '/demo',
				abstract: true
			});
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
