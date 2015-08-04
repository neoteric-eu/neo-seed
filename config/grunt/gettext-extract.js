module.exports = function (grunt) {
	'use strict';

	var appsFiles = {}, seedFiles = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			appsFiles[path + '/_locale/template.pot'] = path + '/**/*@(.html|.js)';
		});

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/seed/*'])
		.forEach(function (path) {
			appsFiles[path + '/_locale/template.pot'] = path + '/**/*@(.html|.js)';
		});

	return {
		apps: {
			files: appsFiles
		},
		seed: {
			files: seedFiles
		}
	};
};
