define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.widgets', ['ui.router']);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('app.demo.widgets', {
				url: '/widgets',
				data: {
					title: 'Widgets'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/widgets/views/widgets-demo.html'
					}
				}
			})
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
