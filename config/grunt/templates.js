module.exports = {
	seed: {
		files: [{
			src: ['seed/**/*.html'],
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/seed/templates/module.js'
		}],
		options: {
			source: function (code) {
				'use strict';
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
			},
			bootstrap: function (module, script) {
				'use strict';
				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("seed.templates",[]).run(function ($templateCache) {' +
					script +
					' });});';
			},
			htmlmin: {
				removeCommentsFromCDATA: true,
				// Do not use COMMENT DIRECTIVES!
				removeComments: true,
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}
	},
	apps: {
		files: [{
			src: 'apps/**/*.html',
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/apps/templates/module.js'
		}],
		options: {
			source: function (code) {
				'use strict';
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
			},
			bootstrap: function (module, script) {
				'use strict';
				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("app.templates",[]).run(function ($templateCache) {' +
					script +
					' });});';
			},
			htmlmin: {
				removeCommentsFromCDATA: true,
				// Do not use COMMENT DIRECTIVES!
				removeComments: true,
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}
	},
};
