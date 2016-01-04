module.exports = function (grunt) {
	'use strict';

	var path = require('path');
	var pkg = require('./package.json');
	var bower = grunt.file.readJSON('src/seed/bower.json');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'tools/grunt'),

		data: {
			meta: {
				version: bower.version,
				name: bower.name,
				project: bower.project
			},
			banner: '/**\n' +
			' * <%= meta.name %>\n' +
			' * @version v<%= meta.version %> - <%= grunt.template.today("yyyy-mm-dd/HH:MM") %>\n' +
			' */\n',
			paths: {
				src: 'src',
				build: 'build',
				tmp: '.tmp',
				test: 'test',
				docs: 'docs',
				release: 'release',
				assets: 'src/assets',
				seed: 'src/seed',
				config: 'src/tools'
			}
		},

		// Pass config to load-grunt-tasks.
		loadGruntTasks: {
			config: pkg
		}
	});

	grunt.task.renameTask('conventionalChangelog', 'changelog');

	grunt.task.renameTask('ngtemplates', 'templates-cache');
	// make duplicate config of tasks
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.task.renameTask('ngtemplates', 'templates-cache-clean');

	grunt.task.renameTask('nggettext_compile', 'gettext-compile');
	grunt.task.renameTask('nggettext_extract', 'gettext-extract');
	grunt.task.renameTask('ngAnnotate', 'annotate');
};
