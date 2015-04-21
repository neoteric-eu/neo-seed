module.exports = function (grunt) {
	'use strict';
	var files = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/app/*'])
		.forEach(function (path) {
			files[path + '/_locale/translation.js'] = path + '/_locale/*.po';
		});

	return {
		all: {
			options: {
				requirejs: true,
				modulePath: 'app'
			},
			files: files
		}
	};
};
