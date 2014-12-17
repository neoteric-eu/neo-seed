'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	var path = require('path');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt'),

		// can optionally pass options to load-grunt-tasks.
		// If you set to false, it will disable auto loading tasks.
		loadGruntTasks: {
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
