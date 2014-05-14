var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		// Grab all files path with "Spec" end naming
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	// Karma serves files from '/base'
	baseUrl: '/base/app/scripts',

	paths: {
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularCookies: '../bower_components/angular-cookies/angular-cookies',
		angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
		angularResource: '../bower_components/angular-resource/angular-resource',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		underscore: '../bower_components/underscore/underscore',
		globalSettings: '../modules/global_settings'
		// sentryClient: '../plugins/sentry-client/sentry-client',
		// 'raven-js': '../bower_components/raven-js/dist/raven.min',
		// 'ravenInstall': '../plugins/sentry-client/raven-install',
		// 'ui.bootstrap': '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls'
	},

	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularCookies': ['angular'],
		'angularSanitize': ['angular'],
		'angularResource': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'underscore': {'exports': '_'},
		// 'ui.bootstrap': { deps: ['angular'] }
	},
	priority: [
		'angular'
	],

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});
