'use strict';

module.exports = function (grunt) {
	var path = require('path');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt'),

		// Pass config to load-grunt-tasks.
		loadGruntTasks: {
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});

	grunt.task.renameTask('bowercopy', 'bower');
	grunt.task.renameTask('ngtemplates', 'templates');
	grunt.task.renameTask('useminPrepare', 'usemin-prepare');
	grunt.task.renameTask('nggettext_compile', 'gettext-compile');
	grunt.task.renameTask('nggettext_extract', 'gettext-extract');
};
