// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		reporter: require('jshint-stylish')
	},
	app: {
		options: {
			jshintrc: '.jshintrc',
			ignores: [
				'<%= yeoman.app %>/require.js',
				'<%= yeoman.app %>/apps/demo/**/*.js',
				'<%= yeoman.app %>/apps/**/_locale/*.js',
				'<%= yeoman.app %>/apps/**/*.spec.js',
				'<%= yeoman.app %>/seed/**/_locale/*.js',
				'<%= yeoman.app %>/seed/**/*.spec.js',
				'<%= yeoman.app %>/seed/_assets/**',
				'<%= yeoman.app %>/apps/*/_assets/**'
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
