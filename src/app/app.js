define([
	'angular',
	'angular-couch-potato',
	'globalSettings'
], function (ng, couchPotato, globalSettings) {
	'use strict';

	var app = ng.module('app', ['seed']);

	couchPotato.configureApp(app);

	app.run(function ($couchPotato, $log, $rootScope, $state) {

		$log.debug('Setting up application configuration');

		app.lazy = $couchPotato;
		app.name = globalSettings.get('APP_NAME');

		$rootScope.appReady = true;
		$rootScope.$state = $state;

		$log.debug('Starting application');
	});

	return app;
});
