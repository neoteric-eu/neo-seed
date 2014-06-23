
define(['globalSettings','raven-js'], function(globalSettings) {
	'use strict';

	var sentryOptions = globalSettings.get('sentryOptions') || {};
	var sentryApiKey = globalSettings.get('sentryApiKey') || '';

	// Raven install
	if (sentryApiKey && !globalSettings.get('DEBUG')) {
		window.Raven.config(sentryApiKey, sentryOptions).install();
	}

});
