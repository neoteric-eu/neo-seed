/**
 * @namespace seed
 */

define([
	'angular',
	'angular-animate',
	'angular-sanitize',
	'angular-ui-router',
	'angular-ui-bootstrap',
	'angular-ui-bootstrap-tpls',
	'angular-ui-select',
	'angular-gettext',
	'angular-permission',
	'angular-loading-bar',
	'angular-moment',
	'angular-restmod',
	'./_includes'
], function (ng) {
	'use strict';

	var seed = ng.module('seed', [
		'ngAnimate',
		'ngSanitize',

		'gettext',
		'angularMoment',
		'restmod',
		'angular-loading-bar',

		'ui.bootstrap',
		'ui.select',
		'ui.router',

		'permission',

		'app.conf',

		// Seed modules
		'seed.templateCache',
		'seed.components',
		'seed.helpers',
		'seed.auth',
		'seed.layout',
		'seed.forms',
		'seed.tables'
	]);

	seed.config(function ($provide, $httpProvider, $locationProvider, $compileProvider, cfpLoadingBarProvider,
						  $logProvider, restmodProvider, uiSelectConfig, appConf) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 500;

		$locationProvider.html5Mode(appConf.generalSettings.html5ModeEnabled);
		$logProvider.debugEnabled(appConf.environmentSettings.debugEnabled);

		/**
		 * Production improvements
		 * @see https://code.angularjs.org/1.4.9/docs/guide/production
 		 */
		$compileProvider.debugInfoEnabled(appConf.environmentSettings.debugEnabled);

		// $http improvements
		$httpProvider.useApplyAsync(true);
		$httpProvider.useLegacyPromiseExtensions(true);

		// set default serializer for http request
		$httpProvider.defaults.paramSerializer = '$httpParamSerializer';

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
	});

	seed.run(function (gettextCatalog, neoLanguage, $log, appConf) {
		$log = $log.getInstance('seed.module');

		neoLanguage.init();
		gettextCatalog.debug = appConf.environmentSettings.debugEnabled;

		$log.debug('Set up seed configuration');
	});

	return seed;
});
