/*jshint -W020 */
_ = require('lodash');

module.exports = function (grunt) {
	'use strict';

	var bowerFiles = [];

	grunt.file
		.expand({filter: 'isFile'}, ['src/**/bower.json'])
		.forEach(function (bowerPath) {
			try {
				bowerFiles.push(grunt.file.readJSON(bowerPath));
			} catch (e) {
				grunt.log.error('Error reading files', e);
			}
		});

	var defaultConf = {
		js: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/js'
			},
			files: {}
		},
		less: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/less'
			},
			files: {}
		},
		fonts: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/fonts'
			},
			files: {}
		},
		options: {
			runBower: false
		}
	};

	bowerFiles.forEach(function (bowerExtension) {
		if (_.has(bowerExtension, 'copy')) {
			// Extend js files
			_.assign(defaultConf.js.files, bowerExtension.copy.js);
			_.assign(defaultConf.less.files, bowerExtension.copy.less);
			_.assign(defaultConf.fonts.files, bowerExtension.copy.fonts);
		}
	});

	_.forOwn(defaultConf, function (value, key) {
		if (_.isEmpty(value.files)) {
			delete defaultConf[key];
		}
	});

	return defaultConf;
};
