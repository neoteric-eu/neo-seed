module.exports = {
	'serve': [
		'logo',
		'clean:server',
		'templates:dist',
		'connect:server',
		'watch'
	],

	'coverage': [
		'karma:coverage'
	],

	'test': [
		'clean:test',
		'jshint:test',
		'test:e2e',
		'test:unit'
	],
	'test:unit': [
		'karma:unit'
	],
	'test:e2e': [
		'connect:test',
		'shell:webdriver-update',
		'protractor:singlerun'
	],

	'build': [
		'logo',
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
		'clean:server',
		'jsdoc'
	],

	'code:auto-comment': [
		'shell:smart-comments'
	],

	'docs': [
		'clean:doc',
		'jsdoc'
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
		'logo',
		'clean:bower',
		'bower',
		'shell:webdriver-update',
		'githooks',
		'config:development',
		'shell:git-disable-tracking-templates'
	]
};

