// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
	'use strict';
	config.set({
		// base path, that will be used to resolve files and exclude
		urlArgs: (new Date()).getTime(),
		basePath: '../',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [
			{pattern: 'src/vendor/bower_components/angular/angular.js', included: false},
			{pattern: 'src/vendor/bower_components/lodash/dist/lodash.min.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-mocks/angular-mocks.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-resource/angular-resource.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-cookies/angular-cookies.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-sanitize/angular-sanitize.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-route/angular-route.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-gettext/dist/angular-gettext.min.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-couch-potato/dist/angular-couch-potato.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-ui-router/release/angular-ui-router.min.js', included: false},
			{pattern: 'src/vendor/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', included: false},
			{pattern: 'src/vendor/smart-admin-plugins/**/*.js', included: false},
			{pattern: 'src/app/**', included: false},
			// {pattern: 'app/bower_components/raven-js/dist/raven.min.js', included: false },
			// {pattern: 'app/plugins/sentry-client/*.js', included: false },

			{pattern: 'src/app/modules/**/test/unit/**/*.spec.js', included: false},
			{pattern: 'test/unit/**/*.spec.js', included: false},

			// http://karma-runner.github.io/0.10/plus/requirejs.html
			'test/test-bootstrap.js'
		],

		// list of files / patterns to exclude
		//exclude: [
		//],

		// web server port
		//port: 9000,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// without coverage
		reporters: ['progress'],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		colors: true
	});
};
