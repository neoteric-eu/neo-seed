define(['angular',
	'angular-couch-potato',
	'angular-ui-router'

], function (ng, couchPotato) {

	"use strict";

	var module = ng.module('app.demo.tables', ['ui.router']);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {

		$stateProvider
			.state('app.demo.tables', {
				abstract: true,
				data: {
					title: 'Tables'
				}
			})

			.state('app.demo.tables.normal', {
				url: '/tables/normal',
				data: {
					title: 'Normal Tables'
				},
				views: {
					"content@app": {
						templateUrl: "apps/demo/modules/tables/views/normal.html"

					}
				}
			})
	});


	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});
	return module;

});
