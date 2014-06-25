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

				// Language code for this installation. All choices can be found here:
				// http://www.i18nguy.com/unicode/language-identifiers.html
				LANGUAGES: [
					{code: 'pl', name:'Polish'}
				]
			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());

