module.exports = {
	unit: {
		configFile: 'tools/karma/karma.conf.js',

		reporters: ['mocha', 'junit', 'coverage'],

		junitReporter: {
			outputFile: '<%= paths.test %>/results/unit/results.xml',
			useBrowserName: false
		},

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

		coverageReporter: {
			dir: '<%= paths.test %>/results/coverage/',
			reporters: [
				{type: 'cobertura', subdir: 'cobertura'},
				{type: 'html', subdir: 'html'}
			]
		}
	}
};
