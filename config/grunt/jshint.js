// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		ignores: [
			'src/app/api/**/*.js',
			'src/app/modules/miniTemplate/locale/**/*.js',
			'src/app/vendor/**/*.js',
			'dist/**/*.js',
			'node_modules/**/*.js'
		],
		reporter: require('jshint-stylish')
	},
	all: [
		'Gruntfile.js',
		'<%= yeoman.app %>/**/*.js'
	],
	test: {
		options: {
			jshintrc: 'test/.jshintrc'
		},
		src: ['test/**/*.js']
	}
};
