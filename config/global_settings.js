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

				languages: [
					{lang: 'PL', name:'Polish'},
					{lang: 'EN', name:'English'}
				]
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());

