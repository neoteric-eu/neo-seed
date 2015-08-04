define(['angular',
	'angular-couch-potato',
	'angular-google-maps',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.maps', ['ui.router', 'google-maps'.ns()]);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider, uiGmapGoogleMapApiProvider) {

		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyB-pIawEcT9U2wmmfZtVa8VzZrheuAFTVg',
			v: '3.17'
		});
		$stateProvider
			.state('app.demo.maps', {
				url: '/maps',
				data: {
					title: 'Maps'
				},
				views: {
					"content@app": {
						controller: 'MapsDemoCtrl',
						templateUrl: 'apps/demo/modules/maps/views/maps-demo.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/layout/directives/smartFitAppView',
								'apps/demo/modules/maps/controllers/MapsDemoCtrl',
								'apps/demo/modules/maps/directives/smartMapInstance',
								'apps/demo/modules/maps/models/SmartMapInstances',
								'apps/demo/modules/maps/models/SmartMapStyle'
							]),
							api: function (uiGmapGoogleMapApi) {
								return uiGmapGoogleMapApi;
							}
						}
					}
				}
			})
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
