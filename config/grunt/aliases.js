module.exports = {
	'serve': [
		'clean:server',
		'bower-install',
		'connect:server',
		'watch'
	],

	'coverage': [
		'karma:coverage',
		'connect:coverage'
	],

	'test': [
		'clean:server',
		'jshint:test',
		'test:e2e',
		'test:unit'
	],
	'test:unit': [
		'karma:unit'
	],
	'test:e2e': [
		'connect:test',
		'shell:webdriver_update',
		'protractor:singlerun'
	],

	'build': [
		'clean:dist',
		'bower-install',
		'config:production',
		'less:dev',
		'nggettext_compile',
		'useminPrepare',
		'ngAnnotate',
		'ngtemplates:dist',
		'copy:dist',
		'requirejs:dist',
		'cssmin',
		'concat',
		'rev',
		'usemin'
	],

	'config:development': [
		'replace:development'
	],
	'config:staging': [
		'replace:staging'
		// Add further deploy related tasks here
	],

	'config:production': [
		'replace:production'
		// Add further deploy related tasks here
	],

	'default': [
		'newer:jshint:app',
		'test',
		'build'
	]
};

