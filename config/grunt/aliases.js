module.exports = {
	'serve': [
		'clean:server',
		'templates:dist',
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
		'less:dev',
		'gettext-extract',
		'gettext-compile',
		'useminPrepare',
		'templates:dist',
		'concat',
		'cssmin',
		'copy:dist',
		'requirejs:dist',
		'rev',
		'usemin',
		'clean:server'
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
	],

	install: [
		'bower:install',
		'shell:webdriver-update',
		//'githooks',
		'config:development',
		'shell:git-disable-tracking-templates',
		'shell:git-submodule-init',
		'shell:git-submodule-update'
	]
};

