module.exports = {
	'serve': [
		'clean:server',
		'bower-install',
		'connect:serve',
		'replace:development',
		// 'open',
		'watch'
	],

	'coverage': [
		'karma:coverage',
		'open:coverage',
		'connect:coverage'
	],

	'test': [
		'clean:server',
		'jshint',
		'connect:test',
		'test:e2e',
		'test:unit'
	],
	'test:unit': [
		'karma:unit'
	],
	'test:e2e': [
		'connect:serve',
		'shell:webdriver_update',
		'protractor:singlerun'
	],

	'build': [
		'clean:dist',
		'bower-install',
		'useminPrepare',
		'less:dev',
		'concat',
		'ngAnnotate',
		'nggettext_compile',
		// Below task commented out as r.js (via grunt-contrib-requirejs) will take care of this
		//'uglify',
		'rev',
		'usemin',
		'copy:dist'
	],

	'staging': [
		'replace:staging'
		// Add further deploy related tasks here
	],

	'production': [
		'replace:production'
		// Add further deploy related tasks here
	],

	'default': [
		'newer:jshint',
		'test',
		'build'
	]
};

