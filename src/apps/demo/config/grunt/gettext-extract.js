module.exports = function (grunt) {
	'use strict';
	var files = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			files[path + '/_locale/template.pot'] = path + '/**/*@(.html|.js)';
		});

	return {
		pot: {
			files: files
		}
	};
};
