module.exports = {
	dist: {
		files: [{
			src: '**/*.html',
			cwd: '<%= yeoman.app %>/app/',
			dest: '<%= yeoman.app %>/app/templates.js'
		}],
		options: {
			prefix: './',
			source: function (code) {
				code = String(code).replace(/\t+/g, '');
				code = String(code).replace(/\n+/g, '');
				code = String(code).replace(/\r+/g, '');
				return code;
			},
			bootstrap: function (module, script) {
				return 'define(["angular", "globalSettings"], function(angular,globalSettings) {' +
						'"use strict";' +
						'var templates = angular.module("prsTemplates", []);' +
						'if(globalSettings.get("DEBUG")) return;' +
						'templates.run(function($templateCache) {' +
						script +
						'});' +
						'return templates;' +
						'});';
			},
			htmlmin: {
				removeCommentsFromCDATA: true,
				// watch out for comment directives!
				removeComments: true,

				// https://github.com/yeoman/grunt-usemin/issues/44
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}
	}
};
