module.exports = function () {
	'use strict';

	return {
		options: {
			overwrite: true
		},
		install: {
			files: [{
				expand: true,
				cwd: '<%= paths.seed %>/__misc/_assets',
				src: ['*'],
				dest: '<%= paths.assets %>/seed'
			}]
		}
	};
};
