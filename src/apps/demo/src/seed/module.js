define([
	'angular',
	'angular-couch-potato',
	'angular-animate',
	'angular-ui-router',
	'angular-sanitize',
	'angular-bootstrap',
	'angular-bootstrap-tpls',
	'angular-ui-select',
	'angular-gettext',
	'angular-permission',
	'angular-moment',
	'angular-restmod',
	'angular-restmod-preload',
	'angular-restmod-find-many',
	'smartwidgets',
	'notification'
], function (ng, couchPotato) {
	'use strict';

	var seed = ng.module('seed', [
		'ngSanitize',
		'ngAnimate',

		'gettext',
		'permission',
		'angularMoment',
		'restmod',
		'scs.couch-potato',

		'ui.bootstrap',
		'ui.select',
		'ui.router',

		'app.conf',

		// Seed modules
		'seed.templates',
		'seed.components',
		'seed.auth',
		'seed.layout',
		'seed.forms',
		'seed.graphs',
		'seed.widgets'
	]);

	couchPotato.configureApp(seed);

	seed.config(function ($provide, $httpProvider, $locationProvider,
		$logProvider, restmodProvider, uiSelectConfig, appConf) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		$locationProvider.html5Mode(appConf.environmentSettings.modRewriteEnabled);
		$logProvider.debugEnabled(appConf.environmentSettings.debugEnabled);

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
		$httpProvider.interceptors.push('HttpRequestInterceptor');
	});

	seed.run(function ($couchPotato, $rootScope, $state,
		gettextCatalog, LanguageAPI, $urlRouter, $log, appConf) {

		$log.debug('Setting up seed configuration');

		LanguageAPI.initiate();
		gettextCatalog.debug = appConf.environmentSettings.debugEnabled;
	});

	return seed;
});
