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
		$logProvider, restmodProvider, uiSelectConfig, appConf, moment) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		$locationProvider.html5Mode(appConf.environmentSettings.modRewriteEnabled);
		$logProvider.debugEnabled(appConf.environmentSettings.debugEnabled);

		$provide.decorator('$log', function ($delegate) {
			$delegate.getInstance = getInstance;

			function getInstance(name) {
				var className = _.isUndefined(name) ? '' : name + ' :: ';
				var logInstance = ng.copy($delegate);

				_.assign(logInstance, {
					log: function () {
						var args = [].slice.call(arguments),
							now = moment().format('YYYY-MM-DD HH:mm:ss');

						args[0] = [null, now + ' - ' + className, args[0]].join('');

						return $delegate.log.apply(null, args);
					},
					info: function () {
						var args = [].slice.call(arguments),
							now = moment().format('YYYY-MM-DD HH:mm:ss');

						args[0] = [null, now + ' - ' + className, args[0]].join('');

						return $delegate.info.apply(null, args);
					},
					debug: function () {
						var args = [].slice.call(arguments),
							now = moment().format('YYYY-MM-DD HH:mm:ss');

						args[0] = [null, now + ' - ' + className, args[0]].join('');

						return $delegate.debug.apply(null, args);
					},
					error: function () {
						var args = [].slice.call(arguments),
							now = moment().format('YYYY-MM-DD HH:mm:ss');

						args[0] = [null, now + ' - ' + className, args[0]].join('');

						return $delegate.error.apply(null, args);
					}
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

		LanguageAPI.initiate();
		gettextCatalog.debug = appConf.environmentSettings.debugEnabled;

		$log.debug('Set up seed configuration');
	});

	return seed;
});
