// Command line actions configuration
module.exports = {
	// Command line conf
	options: {
		async: false
	},
	// Protractor drivers update
	'webdriver-update': {
		command: 'node ./node_modules/protractor/bin/webdriver-manager update'
	},
	'git-disable-tracking-templates': {
		command: 'git update-index --assume-unchanged <%= yeoman.app %>/app/templates/module.js',
		failOnError: false
	},
	'git-submodule-init': {
		command: 'git submodule update --init'
	},
	'git-submodule-update': {
		command: 'git submodule update --remote'
	},
	'smart-comments': {
		command: 'node ./node_modules/smartcomments/bin/smartcomments -g -t <%= yeoman.app %>/app --config config/comments/comments.conf.json'
	}
};
