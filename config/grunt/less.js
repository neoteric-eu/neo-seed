module.exports = function (grunt) {
	'use strict';

	var files = [{
		expand: true,
		cwd: 'src/assets/vendor/less',
		src: [
			'**/*.less',
			//Exclusions from vendor
			'!**/_*.less',
			'!bootstrap/**',
			'!elements/**',
			'!animate/**',
			'!font-awesome/**'
		],
		dest: 'src/assets/vendor/css',
		ext: '.css'
	}];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/assets/*', '!src/assets/vendor'])
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
