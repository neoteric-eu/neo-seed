define([
	'angular',
	'angular-couch-potato',
	'globalSettings',
	'angular-animate',
	'angular-ui-router',
	'angular-ui-router-extras-core',
	'angular-ui-router-extras-dsr',
	'angular-ui-router-extras-transition',
	'angular-ui-router-extras-previous',
	'angular-ui-router-extras-sticky',
	'angular-sanitize',
	'angular-bootstrap',
	'angular-bootstrap-tpls',
	'angular-ui-select',
	'angular-gettext',
	'angular-permission',
	'angular-moment',
	'angular-debounce',
	'angular-restmod',
	'angular-restmod-preload',
	'angular-restmod-find-many',
	'smartwidgets',
	'notification'
], function (ng, couchPotato, globalSettings) {
	'use strict';

	var seed = ng.module('seed', [
		'ngSanitize',
		'ngAnimate',

		'gettext',
		'permission',
		'angularMoment',
		'restmod',
		'debounce',
		'scs.couch-potato',

		'ui.bootstrap',
		'ui.select',

		'ui.router',
		'ct.ui.router.extras.core',
		'ct.ui.router.extras.dsr',
		'ct.ui.router.extras.transition',
		'ct.ui.router.extras.previous',
		'ct.ui.router.extras.sticky',

		// App modules
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
		$logProvider, restmodProvider, uiSelectConfig) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		$locationProvider.html5Mode(globalSettings.get('MOD_REWRITE'));
		$logProvider.debugEnabled(globalSettings.get('DEBUG'));

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
		$httpProvider.interceptors.push('HttpRequestInterceptor');
	});

	seed.run(function ($couchPotato, $rootScope, $state,
		gettextCatalog, LanguageAPI, $urlRouter, $log) {

		$log.debug('Setting up seed configuration');

		LanguageAPI.initiate();
		gettextCatalog.debug = globalSettings.get('DEBUG');
	});

	return seed;
});
