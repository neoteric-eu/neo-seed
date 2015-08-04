// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
	'use strict';
	config.set({
		// base path, that will be used to resolve files and exclude
		urlArgs: (new Date()).getTime(),
		basePath: '../../',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [
			// Load libs
			{pattern: 'src/vendor/**/*.js', included: false},

			// Load app files
			{pattern: 'src/apps/**/!(*.spec).js', included: false},

			//Load test files
			{pattern: 'src/apps/**/unit/*.spec.js', included: false},
			{pattern: 'test/unit/**/*.spec.js', included: false},

			// http://karma-runner.github.io/0.10/plus/requirejs.html
			'config/karma/require.conf.js'
		],

		// list of files / patterns to exclude
		//exclude: [],
		exclude: [
			'src/apps/container.js'
		],

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

		// Allow Webstorm IDE to visualize code coverage
		preprocessors: {
			'src/apps/**/!(*.spec).js': ['coverage']
		},

		// without coverage
		reporters: ['dots', 'progress', 'junit', 'coverage'],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		colors: true
	});
};
