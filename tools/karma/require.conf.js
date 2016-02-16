requirejs(['/base/src/seed/require.conf.js'], function () {
	'use strict';

	var tests = [];
	for (var file in window.__karma__.files) {
		if (window.__karma__.files.hasOwnProperty(file)) {
			// Grab all files path with "Spec" end naming
			if (/\.spec\.js$/.test(file)) {
				tests.push(file.replace(/^\/base\/src\/|\.js$/g, ''));
			}
		}
	}

	requirejs.config({
		// Karma serves files from '/base'
		baseUrl: '/base/src/',
		// Additional libraries
		paths: {
			'angular-mocks': '../bower_components/angular-mocks/angular-mocks'
		},

		shim: {
			'angular-mocks': ['angular']
		},

		// ask Require.js to load these files (all our tests)
		deps: tests,

		// start test run, once Require.js is done
		callback: window.__karma__.start

	});
});
