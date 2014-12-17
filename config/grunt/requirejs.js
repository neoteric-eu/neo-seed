module.exports = {
	// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
	options: {
		// `name` and `out` is set by grunt-usemin
		baseUrl: '<%= yeoman.app %>',
		optimize: 'uglify2',
		//paths: {
		//	'jquery': 'empty:',
		//	'templates': '../../templates'
		//},
		// TODO: Figure out how to make sourcemaps work with grunt-usemin
		// https://github.com/yeoman/grunt-usemin/issues/30
		// generateSourceMaps: true,
		// required to support SourceMaps
		// http://requirejs.org/docs/errors.html#sourcemapcomments
		preserveLicenseComments: false,
		useStrict: true,
		name: 'main',
		out: '<%= yeoman.dist %>/app/main.js',
		mainConfigFile: '<%= yeoman.app %>/app/main.js',
		findNestedDependencies: true,
		uglify2: {
			// output: {
			// beautify: true,
			// },
			// beautify: {
			// semicolons: false
			// },
			mangle: false
		}
	}
};
