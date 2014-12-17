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
				'*.html',
				'views/{,*/}*.html',
				'vendor/bower_components/**/*',
				'images/{,*/}*.{webp}',
				'fonts/*'
			]
		}, {
			expand: true,
			cwd: '.tmp/images',
			dest: '<%= yeoman.dist %>/images',
			src: ['generated/*']
		}]
	},
	requirejs: {
		src: '<%= yeoman.app %>/vendor/bower_components/requirejs/require.js',
		dest: '<%= yeoman.dist %>/vendor/bower_components/requirejs/require.js'
	},
	styles: {
		expand: true,
		cwd: '<%= yeoman.app %>/styles',
		dest: '.tmp/styles/',
		src: '{,*/}*.css'
	}
};
