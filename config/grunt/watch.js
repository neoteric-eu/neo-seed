// Watches files for changes and runs tasks based on the changed files
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: [
			'<%= yeoman.app %>/app/**/**/*.js',
			'!<%= yeoman.app %>/app/**/*.spec.js'
		],
		tasks: 'newer:jshint:app'
	},
	json: {
		files: '<%= yeoman.app %>/app/**/**/*.json'
	},
	html: {
		files: '<%= yeoman.app %>/app/**/*.html',
		tasks: 'templates'
	},
	styles_less: {
		files: '<%= yeoman.app %>/styles/less/**/**/*.less',
		tasks: 'less'
	},
	gruntfile: {
		files: ['Gruntfile.js', 'grunt/*.js'],
		options: {
			reload: true
		}
	}
};
