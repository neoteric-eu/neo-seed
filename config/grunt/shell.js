// Command line actions configuration
module.exports = {
	// Command line conf
	options: {
		stdout: true
	}
	,
	// Protractor update
	webdriver_update: {
		command: 'node ./node_modules/protractor/bin/webdriver-manager update',
		options: {
			stdout: false,
			async: true
		}
	}
};
