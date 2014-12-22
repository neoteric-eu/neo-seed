module.exports = function () {
	return {
		dist: {
			src: ['<%= yeoman.app %>/styles/css/*.css'],
			dest: '<%= yeoman.tmp %>/styles/css/style.css'
		}
	}
};
