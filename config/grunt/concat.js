module.exports = function () {
	'use strict';

	return {
		options: {
			src: ['<%= yeoman.app %>/assets/css/*.css'],
			dest: '<%= yeoman.tmp %>/assets/css/style.css'
		}
	};
};
