module.exports = function () {
	return {
		default: {
			src: ['<%= yeoman.app %>/styles/css/*.css'],
			dest: '<%= yeoman.tmp %>/styles/css/style.css'
		}
	}
};
