/*jshint unused: vars */


//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require.config({
	baseUrl: 'bower_components/',
	paths: {
		angular: 'angular/angular',
		angularRoute: 'angular-route/angular-route',
		angularCookies: 'angular-cookies/angular-cookies',
		angularSanitize: 'angular-sanitize/angular-sanitize',
		angularResource: 'angular-resource/angular-resource',
		angularMocks: 'angular-mocks/angular-mocks',
		domReady: 'requirejs-domready/domReady',
		gritter: 'jquery.gritter/js/jquery.gritter.min',
		jQuery: 'jquery/dist/jquery',
		ngTable: 'ng-table/ng-table',
		text: 'requirejs-text/text',
		underscore: 'underscore/underscore',
		xeditable: 'angular-xeditable/dist/js/xeditable',
		'angular-file-upload': 'angular-file-upload/angular-file-upload',
		'ui.bootstrap': 'angular-ui-bootstrap-bower/ui-bootstrap-tpls',

		'jQuery-ui': 'jquery-ui/ui/jquery-ui',
		'angular-ui-sortable': 'angular-ui-sortable/sortable',



		globalSettings: '../modules/global_settings',
		'theme.app': '../plugins/theme.app',
		'theme.smartwidgets': '../plugins/smartwidgets/jarvis.widget.min',

		// 'raven-js': 'raven-js/dist/raven.min',
		// ravenInstall: '../plugins/sentry-client/raven-install',
		// sentryClient: '../plugins/sentry-client/sentry-client'
	},
	shim: {
		'angular' : {'exports' : 'angular', deps:['theme.app']},
		'angularRoute': ['angular'],
		'angularCookies': ['angular'],
		'angularSanitize': ['angular'],
		'angularResource': ['angular'],
		'angularMocks': {
			deps:['angular'],
			exports:'angular.mock'
		},
		'underscore': {exports: '_'},
		// 'jQuery': {exports: '$', deps:['raven-js']},
		'jQuery': {exports: '$'},
		'ui.bootstrap': { deps: ['angular'] },
		'theme.smartwidgets': { deps: ['jQuery']},
		'theme.app': { deps: ['jQuery']},
		'xeditable': { deps: ['angular']},
		'ngTable': { deps: ['angular']},
		'gritter': { deps: ['jQuery']},
		'angular-file-upload': { deps: ['angular']},

		'jQuery-ui': { deps: ['jQuery']},
		'angular-ui-sortable': { deps: ['angular', 'jQuery-ui']},
		// 'sentryClient':{ deps: ['raven-js', 'ravenInstall', 'angular'] },
		// 'ravenInstall':{ deps: ['raven-js']}
	},
	priority: [
		'angular'
	],
	deps: [
		// kick start application... see bootstrap.js
		'../scripts/bootstrap'
	]
});
