/* jshint unused:false, undef:false, quotmark:false */
(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',
				//baseUrl: 'http://192.168.1.3:9003/api/v1/',
				//tempUrl: 'http://188.116.2.53:9003/api/v1/', //out-of-date
				tempUrl: 'http://192.168.1.3:9003/api/v1/', //out-of-date


				sentryApiKey: '',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
