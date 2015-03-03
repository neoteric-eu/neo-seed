define([
	'angular',
	'angular-couch-potato',
	'globalSettings',
	'angular-local-storage',
	'angular-resource',
	'angular-ui-router',
	'angular-ui-router-extras-core',
	'angular-ui-router-extras-dsr',
	'angular-ui-router-extras-transition',
	'angular-ui-router-extras-previous',
	'angular-ui-router-extras-sticky',
	'angular-sanitize',
	'angular-bootstrap',
	'angular-ui-select',
	'angular-gettext',
	'angular-cookie',
	'angular-permission',
	'angular-moment',
	'angular-debounce',
	'angular-templates',
	'angular-restmod',
	'angular-restmod-preload',
	'angular-restmod-find-many',
	'smartwidgets',
	'notification'
], function (ng, couchPotato, globalSettings) {
	'use strict';

	var app = ng.module('app', [
		'ngSanitize',
		'ngResource',
		'gettext',
		'permission',
		'angularMoment',
		'restmod',
		'debounce',
		'LocalStorageModule',
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
		'app.core',
		'app.auth',
		'app.layout',
		'app.forms',
		'app.graphs',
		'app.widgets',
		'app.dashboard',
		'app.tasks'
	]);

	couchPotato.configureApp(app);

	app.config(function ($provide,
											 $httpProvider,
											 $locationProvider,
											 localStorageServiceProvider,
											 $logProvider,
											 restmodProvider,
											 uiSelectConfig) {

		restmodProvider.rebase(
			'restmod.Preload', 'DefaultPacker', {
				$config: {
					urlPrefix: globalSettings.get('baseUrl'),
					style: 'NeoStyle'
				},
				$extend: {
					Model: {
						/**
						 * Description
						 * @method encodeUrlName
						 * @param {String} _name
						 * @return _name
						 */
						encodeUrlName: function (_name) {
							return _name;
						}
					}
				}
			});

		uiSelectConfig.theme = 'bootstrap';

		$locationProvider.html5Mode(globalSettings.get('MOD_REWRITE'));
		$logProvider.debugEnabled(globalSettings.get('DEBUG'));
		localStorageServiceProvider
			.setPrefix('neo')
			.setStorageType('sessionStorage');

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
		$httpProvider.interceptors.push('HttpRequestInterceptor');
	});

	app.run(function ($couchPotato,
										$rootScope,
										$state,
										gettextCatalog,
										LanguageAPI,
										$urlRouter,
										$log) {

		$log.debug('Setting up application configuration');

		app.lazy = $couchPotato;
		app.name = globalSettings.get('APP_NAME');

		LanguageAPI.initiate();

		gettextCatalog.debug = globalSettings.get('DEBUG');

		$rootScope.appReady = true;

		$log.debug('Starting application');
	});

	return app;
});
