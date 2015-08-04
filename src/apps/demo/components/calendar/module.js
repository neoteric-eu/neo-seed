define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.calendar', ['ngResource', 'ui.router']);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {

		$stateProvider
			.state('app.demo.calendar', {
				url: '/calendar',
				views: {
					'content@app': {
						templateUrl: 'apps/demo/components/calendar/views/calendar.tpl.html'
					}
				},
				data: {
					title: 'Calendar'
				}
			});
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
