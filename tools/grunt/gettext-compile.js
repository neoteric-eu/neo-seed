module.exports = function () {
	'use strict';

	return {
		seed: {
			options: {
				requirejs: true,
				modulePath: 'angular-gettext'
			},
			files: [{
				dest: '<%= paths.seed %>/__misc/_locale/translation.js',
				src: '<%= paths.seed %>/__misc/_locale/*.po'
			}]
		}
	};
};
