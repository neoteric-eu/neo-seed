module.exports = function (grunt) {
	'use strict';

	var appsFiles = {}, seedFiles = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			appsFiles[path + '/_locale/translation.js'] = path + '/_locale/*.po';
		});

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			seedFiles[path + '/_locale/translation.js'] = path + '/_locale/*.po';
		});

	return {
		apps: {
			options: {
				requirejs: true,
				modulePath: 'app'
			},
			files: appsFiles
		},
		seed: {
			options: {
				requirejs: true,
				modulePath: 'seed'
			},
			files: seedFiles
		}
	};
};
