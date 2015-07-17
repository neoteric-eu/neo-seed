// Watches files for changes and runs tasks based on the changed files
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: [
			'<%= yeoman.app %>/apps/**/*.js'
		],
		tasks: 'newer:jshint:app'
	},
	json: {
		files: '<%= yeoman.app %>/apps/**/**/*.json'
	},
	html: {
		files: '<%= yeoman.app %>/apps/**/**/*.html',
		tasks: 'templates'
	},
	styles_less: {
		files: '<%= yeoman.app %>/assets/less/**/**/*.less',
		tasks: 'less'
	},
	gruntfile: {
		files: ['Gruntfile.js', 'grunt/*.js'],
		options: {
			reload: true
		}
	}
};
