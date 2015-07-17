module.exports = function () {
	'use strict';

	return {
		default: {
			options: {
				baseUrl: 'src/',
				optimize: 'none',
				generateSourceMaps: true,
				preserveLicenseComments: false,
				useStrict: true,
				out: '<%= yeoman.dist %>/apps/container.js',
				mainConfigFile: '<%= yeoman.app %>/seed/require.conf.js',
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				replaceRequireScript: [{
					files: ['<%= yeoman.dist %>/index.html'],
					module: 'container'
				}],
				uglify2: {
					mangle: false
				},
				include: ['container']
			}
		}
	};
};
