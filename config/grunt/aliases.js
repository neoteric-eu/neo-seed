module.exports = {
	'serve': {
		description: 'Runs locally server with application',
		tasks: [
			'config:development',
			'clean:server',
			//'templates',
			'connect:server'
		]
	},

	'coverage': {
		description: 'Checks unit-test code coverage',
		tasks: [
			'karma:coverage'
		]
	},

	'test': {
		description: 'Executes complete app testing',
		tasks: ['clean:test',
			'jshint:test',
			'test:e2e',
			'test:unit'
		]
	},
	'test:unit': {
		description: 'Runs unit app testing',
		tasks: [
			'karma:unit'
		]
	},
	'test:e2e': {
		description: 'Runs e2e app testing',
		tasks: [
			'connect:test',
			'shell:webdriver-update',
			'protractor:singlerun'
		]
	},

	'dist': {
		description: 'Creates production version of code in /dist catalog',
		tasks: [
			'clean:dist',
			'config:production',
			'less',
			'useminPrepare',
			'templates',
			'concat',
			'cssmin',
			'copy',
			'requirejs',
			'rev',
			'usemin',
			'clean:server',
			'jsdoc'
		]
	},

	release: {
		description: 'Deploy built app on nexus and bump version of code on master branch',
		tasks: [
			'changelog',
			'bump:minor',
			'compress',
			'nexus'
		]
	},

	'docs': {
		description: 'Generates JSDoc documentation',
		tasks: [
			'clean:doc',
			'jsdoc'
		]
	},

	'default': {
		description: 'Create production version on app after testing',
		tasks: [
			'jshint:app',
			'test',
			'dist'
		]
	},

	install: {
		description: 'Internally used form "npm install" installation task',
		tasks: [
			'logo',
			'clean:bower',
			'force:bower',
			'symlink',
			'shell:webdriver-update',
			'githooks',
			'config:development',
			'shell:git-disable-tracking-templates',
			'shell:git-submodule-init',
			'shell:git-submodule-update',
			'less'
		]
	}
};

