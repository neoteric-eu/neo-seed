// Watches files for changes and runs tasks based on the changed files
module.exports = {
	js: {
		files: ['<%= yeoman.app %>/scripts/{,*/}*.js', '<%= yeoman.app %>/modules/{,**/}*.js'],
		tasks: ['newer:jshint:all']
		// options: {
		// 	livereload: true
		// }
	},
	jsTest: {
		files: ['<%= yeoman.app %>/scripts/{,*/}*.js', '<%= yeoman.app %>/modules/{,**/}*.js'],
		tasks: ['newer:jshint:test']
	},
	styles: {
		files: '<%= yeoman.app %>/{,**/}*.less',
		tasks: 'less:dev'
	},
	gruntfile: {
		files: ['Gruntfile.js']
	}
	// livereload: {
	// 	options: {
	// 		livereload: '<%= connect.options.livereload %>'
	// 	},
	// 	files: [
	// 		'<%= yeoman.app %>/{,*/}*.html',
	// 		'.tmp/styles/{,*/}*.css',
	// 		'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
	// 	]
	// }
};
