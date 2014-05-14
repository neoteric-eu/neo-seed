
define(['raven-js'], function() {
	'use strict';

	var sentryOptions = {};
	var sentryApiKey = 'http://7e66bf589512478c9240b2fe9231e78c@sentry.neoteric.eu:9000/13';

	// Raven install
	window.Raven.config(sentryApiKey, sentryOptions).install();

});
