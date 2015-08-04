module.exports = function (grunt) {
	'use strict';

	var defaultFiles = [{
		expand: true,
		overwrite: false,
		cwd: 'src/seed/_assets',
		src: ['*'],
		dest: 'src/assets/seed'
	}];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			try {
				defaultFiles.push({
					expand: true,
					overwrite: false,
					cwd: path + '/_assets',
					src: ['*'],
					dest: 'src/assets/' + path.split('/').pop()
				});
			} catch (e) {
				// Handle exception
			}
		});

	return {
		options: {
			overwrite: true
		},
		default: {
			files: defaultFiles
		}
	}
};
