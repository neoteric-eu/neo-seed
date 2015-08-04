//noinspection JSValidateTypes
_ = require('lodash');

module.exports = function (grunt) {
	var bowerFiles = [];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/**'])
		.forEach(function (path) {
			try {
				bowerFiles.push(grunt.file.readJSON(path + '/bower.json'));
			} catch (e) {
				// Handle exception
			}
		});

	var defaultConf = {
		options: {
			runBower: true
		},
		js: {
			options: {
				destPrefix: 'src/assets/vendor/js'
			},
			files: {}
		},
		less: {
			options: {
				destPrefix: 'src/assets/vendor/less'
			},
			files: {}
		},
		fonts: {
			options: {
				destPrefix: 'src/assets/vendor/fonts'
			},
			files: {}
		},
		require: {
			options: {
				destPrefix: 'src'
			},
			files: {
				'require.js': 'requirejs/require.js'
			}
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

	return defaultConf;
};
