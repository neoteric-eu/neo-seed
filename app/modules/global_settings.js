(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',

				sentryApiKey: '',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
