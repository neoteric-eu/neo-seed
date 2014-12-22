module.exports = {
	dist: {
		files: [{
			src: 'app/**/*.html',
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/app/templates/module.js'
		}],
		options: {
			source: function (code) {
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
			},
			bootstrap: function (module, script) {
				return 'define(["angular"], function(angular) { return angular.module("app.templates",[]).run(function ($templateCache) {' + script + ' });});';
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
	}
}
;
