module.exports = function (grunt) {
	'use strict';

	function getVersion(bowerFile) {
		var ver ;
		if (grunt.file.exists(bowerFile)) {
			ver = grunt.file.readJSON(bowerFile).version ;
		}
		return ver || '0.0.0';
	}

	var defaultConf = {
		container: {
			options: {
				changelogOpts: {
					releaseCount: 1,
					preset: 'angular'
				},
				context: {
					version: getVersion('src/bower.json')
				}
			},
			src: 'CHANGELOG.md'
		},
		seed: {
			options: {
				changelogOpts: {
					releaseCount: 1,
					preset: 'angular'
				},
				context: {
					version: getVersion('src/seed/bower.json')
				},
				path: 'src/seed'
			},
			src: 'CHANGELOG.md'
		}
	};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {

			var appName = path.split('/').pop();

			if (!grunt.file.exists('src/apps/' + appName + '/CHANGELOG.md')) {
				grunt.file.write('src/apps/' + appName + '/CHANGELOG.md', 'changelog');
			}

			defaultConf[appName] = {
				options: {
					changelogOpts: {
						releaseCount: 1,
						preset: 'angular'
					},
					context: {
						version: getVersion('src/apps/' + appName + '/bower.json')
					},
					path: 'src/apps/' + appName
				},
				src: 'CHANGELOG.md'
			};
		});

	return defaultConf;

};

