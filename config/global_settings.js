(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				// URL FOR REST CLIENT
				baseUrl: '@@baseUrl',

				DEBUG: '@@DEBUG',

				sentryApiKey: '@@sentryApiKey',
				sentryOptions: '@@sentryOptions',
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());

