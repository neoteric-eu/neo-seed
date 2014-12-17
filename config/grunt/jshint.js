// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		ignores: [
			'<%= yeoman.app %>/app/api/**/*.js',
			'<%= yeoman.app %>/app/modules/miniTemplate/locale/**/*.js',
			'<%= yeoman.app %>/vendor/**/*.js',
			'<%= yeoman.dist %>/**/*.js',
			'node_modules/**/*.js'
		],
		reporters: [require('jshint-stylish')]
	},
	all: [
		'Gruntfile.js',
		'<%= yeoman.app %>/app/**/*.js'
	],
	test: {
		options: {
			jshintrc: 'test/.jshintrc'
		},
		src: ['test/**/*.js']
	}
};
