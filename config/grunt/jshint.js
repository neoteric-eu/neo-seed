// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		reporters: [require('jshint-stylish')],
		jshintrc: '.jshintrc'
	},
	app: {
		options: {
			ignores: [
				'<%= yeoman.app %>/app/require.js',
				'<%= yeoman.app %>/app/**/_locale/*.js',
				'<%= yeoman.app %>/app/**/*.spec.js'
			]
		},
		src: [
			'Gruntfile.js',
			'<%= yeoman.app %>/app'
		]
	},
	test: {
		src: [
			'test/**/*.spec.js',
			'<%= yeoman.app %>/app/**/*.spec.js'
		]
	}
};
