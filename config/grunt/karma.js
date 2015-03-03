module.exports = {
	unit: {
		configFile: 'config/karma/karma.conf.js',
		plugins: [
			'karma-jasmine',
			'karma-requirejs',
			'karma-phantomjs-launcher',
			'karma-junit-reporter'
		],
		reporters: ['dots', 'junit'],

		junitReporter: {
			outputFile: 'test/results/unit/results.xml'
		}
	},
	coverage: {
		configFile: 'config/karma/karma.conf.js',
		plugins: [
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-phantomjs-launcher'
		],

		preprocessors: {
			'src/app/**/*.js': 'coverage'
		},

		reporters: ['coverage'],

		coverageReporter: {
			type: 'cobertura',
			dir: 'test/results/coverage/',
			subdir: '.'
		},
		singleRun: true,
		autoWatch: false
	},
	preCommit: {
		configFile: 'config/karma/karma.conf.js'
	}
};
