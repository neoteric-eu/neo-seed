/* jshint unused:false, undef:false, quotmark:false */
(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',

				//baseUrl: 'http://192.168.1.3:9003/api/v1/',
				tempUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',


				sentryApiKey: '',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
