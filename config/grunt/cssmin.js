module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<% yeoman.app %>/styles/css/',
			src: ['*.css', '!*.min.css'],
			dest: '<% yeoman.dist %>/styles/css/',
			ext: '.min.css'
		}]
	}
};
