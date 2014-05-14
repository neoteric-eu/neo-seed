/* jshint unused:false, undef:false, quotmark:false */
(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				//URL FOR REST CLIENT
				baseUrl: 'http://188.116.54.20:2222/api/v1/',

				sentryApiKey: '',
				sentryOptions: {},
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());
