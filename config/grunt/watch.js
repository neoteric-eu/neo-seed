// Watches files for changes and runs tasks based on the changed files
module.exports = {
	js: {
		files: ['<%= yeoman.app %>/app/**/*.js'],
		tasks: 'newer:jshint:all'
	},
	js_test: {
		files: ['test/**/*.spec.js'],
		tasks: 'newer:jshint:test'
	},
	styles_less: {
		files: '<%= yeoman.app %>/styles/less/**/*.less',
		tasks: 'less:dev'
	},
	styles_scss: {
		files: '<%= yeoman.app %>/styles/scss/**/*.scss'
	},
	gruntfile: {
		files: [ 'Gruntfile.js', 'grunt/*.js'],
		options: {
			reload: true
		}
	}
};
