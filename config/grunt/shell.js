// Command line actions configuration
module.exports = {
	// Command line conf
	options: {
		stdout: false,
		async: true
	},
	// Protractor drivers update
	'webdriver-update': {
		command: 'node ./node_modules/protractor/bin/webdriver-manager update'
	},
	'git-disable-tracking-templates': {
		command: 'git update-index --assume-unchanged <%= yeoman.app %>/app/templates/module.js'
	},
	'git-submodule-init': {
		command: 'git submodule init'
	},
	'git-submodule-update': {
		command: 'git submodule update'
	}
};
