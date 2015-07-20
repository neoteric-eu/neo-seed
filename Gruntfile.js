module.exports = function (grunt) {
	'use strict';

	var path = require('path');
	var pkg = require('./package.json');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt'),

		data: {
			pkg: pkg
		},
		// Pass config to load-grunt-tasks.
		loadGruntTasks: {
			config: pkg
		}
	});

	grunt.registerTask('logo', 'Display company logo', function () {
		grunt.log.write(
			grunt.file.read('config/logo/logo.txt')
		);
	});

	grunt.task.renameTask('bowercopy', 'bower');
	grunt.task.renameTask('nexusDeployer', 'nexus');
	grunt.task.renameTask('ngtemplates', 'templates');
	grunt.task.renameTask('nggettext_compile', 'gettext-compile');
	grunt.task.renameTask('nggettext_extract', 'gettext-extract');
	grunt.task.renameTask('ngconstant', 'config');
};
