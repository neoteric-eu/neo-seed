module.exports = function () {
	'use strict';

	return {
		options: {
			reporter: require('jshint-stylish'),
			jshintrc: '.jshintrc'
		},
		seed: {
			options: {
				ignores: [
					'<%= paths.seed %>/__misc/'
				]
			},
			src: ['<%= paths.seed %>']
		}
	};
};
