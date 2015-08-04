module.exports = {
	options: {
		files: ['package.json'],
		updateConfigs: ['pkg'],
		commit: true,
		commitMessage: 'Release v%VERSION%',
		commitFiles: ['package.json', 'bower.json'],
		createTag: true,
		tagName: 'v%VERSION%',
		tagMessage: 'Version v%VERSION%',
		push: true,
		pushTo: 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace: false,
		prereleaseName: 'dev',
		regExp: false
	}
};
