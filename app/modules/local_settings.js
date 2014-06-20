(function() {
	'use strict';
	define(['globalSettings'], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',

				sentryApiKey: 'http://7e66bf589512478c9240b2fe9231e78c@sentry.neoteric.eu:9000/13',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
