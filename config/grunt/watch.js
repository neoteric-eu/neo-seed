// Watches files for changes and runs tasks based on the changed files
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: [
			'<%= yeoman.app %>/apps/**/*.js',
			'!<%= yeoman.app %>/apps/templates/module.js',
			'<%= yeoman.app %>/seed/**/*.js',
			'!<%= yeoman.app %>/seed/templates/module.js'
		],
		tasks: 'newer:jshint:app'
	},
	'html_apps': {
		expand: true,
		cwd: '<%= yeoman.app %>/apps/',
		files: '**/*.html',
		tasks: 'templates:apps'
	},
	'html_seed': {
		expand: true,
		cwd: '<%= yeoman.app %>/seed/',
		files: '**/*.html',
		tasks: 'templates:seed'
	},
	styles_less: {
		cwd: '<%= yeoman.app %>',
		expand: true,
		files: '**/*.less',
		tasks: 'less'
	},
	gruntfile: {
		files: ['Gruntfile.js', 'grunt/*.js'],
		options: {
			reload: true
		}
	}
};
