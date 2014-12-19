module.exports = {
	dist: {
		// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
		options: {
			optimize: 'none',
			//optimize: 'uglify2',
			generateSourceMaps: true,
			preserveLicenseComments: false,
			useStrict: true,
			out: '<%= yeoman.dist %>/app/main.js',
			mainConfigFile: '<%= yeoman.app %>/app/require.config.js',
			findNestedDependencies: true,
			removeCombined: true,
			replaceRequireScript: [{
				files: ['<%= yeoman.dist %>/index.html'],
				module: 'main'
			}],
			name: 'almond',
			//uglify2: {
			//	output: {
			//		beautify: true
			//	},
			//	mangle: false
			//},
			insertRequire: ['main'],
			include: ['main', 'templates'],
			wrap: true
		}
	}
};
