module.exports = {
	dist: {
		files: {
			src: [
				'<%= yeoman.dist %>/apps/{,*/}*.js',
				'<%= yeoman.dist %>/assets/css/{,*/}*.css'
			]
		}
	}
};
