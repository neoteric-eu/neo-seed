module.exports = function () {
	'use strict';

	return {
		release: {
			options: {
				groupId: "com.neoteric.b2b",
				artifactId: "tasks",
				version: "<%= pkg.version %>",
				packaging: 'zip',
				auth: {
					username: 'deployment',
					password: 'deployment123'
				},
				pomDir: 'build/pom',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/releases',
				artifact: 'build/release-<%= pkg.version %>.zip',
				noproxy: 'localhost',
				cwd: ''
			}
		}
	}
};
