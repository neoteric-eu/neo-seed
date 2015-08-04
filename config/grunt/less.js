module.exports = function (grunt) {
	'use strict';

	var files = [];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/assets/*'])
		.forEach(function (path) {
			try {
				files.push({
					expand: true,
					cwd: path + '/less',
					src: ['**/*.less', '!**/_*.less'],
					dest: path + '/css',
					ext: '.css'
				})
			} catch (e) {
				// Handle exception
			}
		});

	return {
		default: {
			files: files
		}
	};
};
