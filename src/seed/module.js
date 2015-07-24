define([
	'angular',
	'angular-animate',
	'angular-sanitize',
	'angular-ui-router',
	'angular-bootstrap',
	'angular-bootstrap-tpls',
	'angular-ui-select',
	'angular-gettext',
	'angular-permission',
	'angular-loading-bar',
	'angular-moment',
	'angular-restmod',
	'angular-restmod-preload',
	'angular-restmod-find-many',
	'smartwidgets',
	'notification'
], function (ng) {
	'use strict';

	var seed = ng.module('seed', [
		'ngAnimate',
		'ngSanitize',

		'gettext',
		'permission',
		'angularMoment',
		'restmod',
		'angular-loading-bar',

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

	seed.config(function ($provide, $httpProvider, $locationProvider, cfpLoadingBarProvider,
		$logProvider, restmodProvider, uiSelectConfig, appConf, moment) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 500;

		$locationProvider.html5Mode(appConf.environmentSettings.modRewriteEnabled);
		$logProvider.debugEnabled(appConf.environmentSettings.debugEnabled);

		// Decorate angular logger
		$provide.decorator('$log', function ($delegate) {
			$delegate.getInstance = getInstance;

			function getInstance(name) {
				var className = _.isUndefined(name) ? '' : name + ' :: ';
				var logInstance = ng.copy($delegate);

				function decorate(logFn, className) {
					return function () {
						var args = [].slice.call(arguments),
							now = moment().format('YYYY-MM-DD HH:mm:ss');

						args[0] = [null, now + ' - ' + className, args[0]].join('');

						return logFn.apply(null, args);
					};
				}

				_.assign(logInstance, {
					log: decorate($delegate.log, className),
					info: decorate($delegate.info, className),
					debug: decorate($delegate.debug, className),
					error: decorate($delegate.error, className)
				});

				return logInstance;
			}

			return $delegate;
		});

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
		$httpProvider.interceptors.push('HttpRequestInterceptor');
	});

	seed.run(function (gettextCatalog, LanguageAPI, $log, appConf) {
		$log = $log.getInstance('seed.module');

		LanguageAPI.init();
		gettextCatalog.debug = appConf.environmentSettings.debugEnabled;

		$log.debug('Set up seed configuration');
	});

	return seed;
});
