module.exports = function (grunt) {
	'use strict';

	function getVersion(bowerFile) {
		var ver ;
		if (grunt.file.exists(bowerFile)) {
			ver = grunt.file.readJSON(bowerFile).version ;
		}
		return ver || '0.0.0';
	}

	return {
		seed: {
			options: {
				changelogOpts: {
					releaseCount: 1,
					preset: 'angular'
				},
				context: {
					version: getVersion('bower.json')
				},
				path: '.'
			},
			src: 'CHANGELOG.md'
		}
	};

};

