module.exports = function () {
	'use strict';

	return {
		options: {
			source: function (code) {
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
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
		},

		seed: {
			files: [{
				src: ['index.html'],
				cwd: '<%= paths.src %>',
				dest: '<%= paths.seed %>/__misc/_templates/module.js'
			}],
			options: {
				bootstrap: function () {
					return 'define([\'angular\'], function(angular) { ' +
						'/*jshint quotmark: false*/ "use strict"; ' +
						'return angular' +
						'.module("seed.templateCache",[])' +
						'.run(function ($log) { ' +
						'$log = $log.getInstance(\'seed.templateCache.module\');' +
						'$log.debug(\'Initiated module\'); });});';
				}
			}
		}
	};
};
