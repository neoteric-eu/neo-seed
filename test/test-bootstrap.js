var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		// Grab all files path with "Spec" end naming
		if (/\.spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths: {
		angular: '../app/bower_components/angular/angular',
		angularRoute: '../app/bower_components/angular-route/angular-route',
		angularCookies: '../app/bower_components/angular-cookies/angular-cookies',
		angularSanitize: '../app/bower_components/angular-sanitize/angular-sanitize',
		angularResource: '../app/bower_components/angular-resource/angular-resource',
		angularMocks: '../app/bower_components/angular-mocks/angular-mocks',
		lodash: '../app/bower_components/lodash/dist/lodash.min',
		globalSettings: '../app/modules/global_settings',
		angularGettext: '../app/bower_components/angular-gettext/dist/angular-gettext.min'
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
		'lodash': {'exports': '_'},
		'angularGettext': { deps: ['angular'] }
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
