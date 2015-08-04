//noinspection JSUnusedGlobalSymbols
exports.config = {
	// ----- How to setup Selenium -----
	//
	// There are three ways to specify how to use Selenium. Specify one of the
	// following:
	//
	// 1. seleniumServerJar - to start Selenium Standalone locally.
	// 2. seleniumAddress - to connect to a Selenium server which is already
	//    running.
	// 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

	// The location of the selenium standalone server .jar file.
	seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

	// The port to start the selenium server on, or null if the server should
	// find its own unused port.
	seleniumPort: null,

	// Chromedriver location is used to help the selenium standalone server
	// find chromedriver. This will be passed to the selenium jar as
	// the system property webdriver.chrome.driver. If null, selenium will
	// attempt to find chromedriver using PATH.
	chromeDriver: '../../node_modules/protractor/selenium/chromedriver',

	// Additional command line options to pass to selenium. For example,
	// if you need to change the browser timeout, use
	// seleniumArgs: ['-browserTimeout=60'],
	seleniumArgs: [],

	// ----- What tests to run -----
	//
	// Spec patterns are relative to the location of this config.
	specs: [
		'../../test/e2e/**/*.spec.js',
		'../../src/apps/**/test/e2e/**/*.spec.js'
	],

	// ----- Capabilities to be passed to the webdriver instance ----
	//
	// For a full list of available capabilities, see
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities
	// and
	// https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--disable-extensions']
		},
		platform: 'ANY'
	},

	directConnect: true,

	// A base URL for your application under test. Calls to protractor.get()
	// with relative paths will be prepended with this.
	baseUrl: 'http://localhost:7357',

	// Selector for the element housing the angular app - this defaults to
	// body, but is necessary if ng-app is on a descendant of <body>
	rootElement: 'body',

	// Enable Jasmine support
	framework: 'jasmine2',

	onPrepare: function () {
		'use strict';

		// Create jenkins report
		var jasmineReporters = require('jasmine-reporters');
		//noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
		jasmine.getEnv().addReporter(
			new jasmineReporters.JUnitXmlReporter({
				consolidateAll: true,
				filePrefix: 'e2e',
				savePath: 'test/results/e2e'
			})
		);

		// Add screenshots to reports
		var ScreenShotReporter = require('protractor-screenshot-reporter');
		var path = require('path');
		//noinspection JSCheckFunctionSignatures
		jasmine.getEnv().addReporter(new ScreenShotReporter({
			baseDirectory: 'test/results/e2e',
			pathBuilder: function pathBuilder(spec, descriptions) {
				return path.join(descriptions.reverse().join('/'));
			}
		}));
	},

	// ----- Options to be passed to minijasminenode -----
	jasmineNodeOpts: {
		// onComplete will be called just before the driver quits.
		onComplete: null,
		// If true, display spec names.
		isVerbose: false,
		// If true, print colors to the terminal.
		showColors: true,
		// If true, include stack traces in failures.
		includeStackTrace: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 10000
	}
};
