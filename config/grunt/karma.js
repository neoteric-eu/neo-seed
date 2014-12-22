module.exports = {
	unit: {
		configFile: 'test/karma.conf.js'
	},
	coverage: {
		configFile: 'test/karma.conf.js',
		plugins: [
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-phantomjs-launcher'
		],

		preprocessors: {
			'src/app/modules/**/*.js': 'coverage'
		},

		reporters: ['coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/',
			subdir: '.'
		},
		singleRun: true,
		autoWatch: false
	},
	preCommit: {
		configFile: 'test/karma.conf.js'
	}
};
