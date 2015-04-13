module.exports = {
	'serve': [
		'clean:server',
		'templates',
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

	'dist': [
		'clean:dist',
		'config:production',
		'less',
		'useminPrepare',
		'templates',
		'concat',
		'cssmin',
		'copy',
		'requirejs',
		'rev',
		'usemin',
		'clean:server',
		'jsdoc'
	],

	release: [
		'changelog',
		'bump:minor',
		'compress',
		'nexus'
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
		'dist'
	],

	install: [
		'logo',
		'clean:bower',
		'bower',
		'shell:webdriver-update',
		'githooks',
		'config:development',
		'shell:git-disable-tracking-templates',
		'shell:git-submodule-init',
		'shell:git-submodule-update',
		'less'
	]
};

