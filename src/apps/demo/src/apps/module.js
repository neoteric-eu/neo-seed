define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {
	'use strict';

	var container = ng.module('app', ['seed', 'app.conf']);

	couchPotato.configureApp(container);

	container.run(function ($couchPotato, $log, $rootScope, $state, appConf) {

		$log.debug('Setting up application configuration');

		container.lazy = $couchPotato;
		container.name = appConf.appName;

		$rootScope.appReady = true;
		$rootScope.$state = $state;

		$log.debug('Starting application');
	});

	return container;
});
