(function() {
	'use strict';
	define(['globalSettings'], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',

				sentryApiKey: 'http://00000000000000000000000@sentry.neoteric.eu:9000/0',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
