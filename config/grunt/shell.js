// Command line actions configuration
module.exports = {
	// Command line conf
	options: {
		stdout: false,
		async: true
	},
	// Protractor drivers update
	webdriver_update: {
		command: 'node ./node_modules/protractor/bin/webdriver-manager update'
	},
	disable_tracking_templates: {
		command: 'git update-index --assume-unchanged <%= yeoman.app %>/app/modules/templates/module.js'
	},
	git_submodule_init: {
		command: 'git submodule init'
	},
	git_submodule_update: {
		command: 'git submodule update'
	}
};
