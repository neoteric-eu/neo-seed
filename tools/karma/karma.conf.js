// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
	'use strict';
	config.set({
		// base path, that will be used to resolve files and exclude
		urlArgs: (new Date()).getTime(),
		basePath: '../../',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine', 'jasmine-matchers', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [
			{pattern: 'bower_components/angular-mocks/angular-mocks.js', included: false},
			{pattern: 'src/assets/**/*.js', included: false},
			{pattern: 'src/seed/**/*.js', included: false},
			{pattern: 'src/seed/**/*.html', included: false},
			{pattern: 'src/seed/**/*.html.js', included: false},
			'tools/karma/require.conf.js'
		],

		// list of files / patterns to exclude
		//exclude: [],

		// web server port
		//port: 9000,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_ERROR,

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

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'src/seed/**/!(*.spec).js': ['coverage'],
			// generate js files from html templates
			'src/seed/**/*.html': ['ng-html2js', 'requirejs-wrapper']
		},

		ngHtml2JsPreprocessor: {
			moduleName: 'seed.templateCache',
			stripPrefix: 'src/'
		},

		requireJsWrapper: {
			dependencies: ['angular']
		},

		// Continuous Integration mode
		singleRun: true,

		colors: true
	});
};
