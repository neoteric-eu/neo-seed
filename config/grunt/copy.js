// Copies remaining files to places other tasks can use
module.exports = {
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= yeoman.app %>',
			dest: '<%= yeoman.dist %>',
			src: [
				'*.{ico,png,txt}',
				'.htaccess',
				'index.html',
				'404.html',
				'styles/css/*',
				'images/**/*',
				'styles/fonts/**/*',
				'styles/img/**/*'
			]
		}, {
			expand: true,
			cwd: '.tmp/images',
			dest: '<%= yeoman.dist %>/images',
			src: ['generated/*']
		}]
	}
};
