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
		'less:dev',
		'nggettext_compile',
		'useminPrepare',
		'ngAnnotate',
		'ngtemplates:dist',
		'requirejs',
		'concat',
		'cssmin',
		//// 'uglify:dist',
		'copy:requirejs',
		'copy:dist',
		//// 'uglify:requirejs',
		//// 'uglify:generated',
		//// Below task commented out as r.js (via grunt-contrib-requirejs) will take care of this
		////'uglify',
		'rev',
		'usemin'
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
		'newer:jshint:app',
		'test',
		'build'
	]
};

