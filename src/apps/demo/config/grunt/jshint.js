// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		reporters: [require('jshint-stylish')]
	},
	app: {
		options: {
			jshintrc: '.jshintrc',
			ignores: [
				'<%= yeoman.app %>/require.js',
				'<%= yeoman.app %>/apps/**/_locale/*.js',
				'<%= yeoman.app %>/apps/**/*.spec.js',
				'<%= yeoman.app %>/seed/**/_locale/*.js',
				'<%= yeoman.app %>/seed/**/*.spec.js'
			]
		},
		src: [
			'Gruntfile.js',
			'<%= yeoman.app %>/apps',
			'<%= yeoman.app %>/seed'
		]
	},
	test: {
		src: [
			'test/**/*.spec.js',
			'<%= yeoman.app %>/apps/**/*.spec.js',
			'<%= yeoman.app %>/seed/**/*.spec.js'
		]
	}
};
