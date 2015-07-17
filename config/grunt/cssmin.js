module.exports = {
	minify: {
		files: [{
			expand: true,
			cwd: '<%= yeoman.tmp %>/assets/css/',
			src: '**/*.css',
			dest: '<%= yeoman.dist %>/assets/css/',
			ext: '.min.css',
			extDot: 'last'
		}]
	}
};
