module.exports = function (grunt) {
	//noinspection JSUnresolvedFunction
	return {
		dist: {
			options: {
				optimize: 'uglify2',
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
				uglify2: {
					mangle: false
				},
				insertRequire: ['main'],
				include: grunt.file.readYAML('src/app/require.include.yml'),
				wrap: true
			}
		}
	}
};
