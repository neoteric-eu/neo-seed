(function() {
	'use strict';
	define([], function() {

		return {
			cfg: {
				// URL FOR REST CLIENT
				baseUrl: '@@baseUrl',

				DEBUG: '@@DEBUG',

				SENTRY_API_KEY: '@@SENTRY_API_KEY',
				SENTRY_OPTIONS: '@@SENTRY_OPTIONS',

				LOGIN_DATA: '@@LOGIN_DATA',

				// Language code for this installation. All choices can be found here:
				// http://www.i18nguy.com/unicode/language-identifiers.html
				LANGUAGES: [
					{code: 'pl', name:'Polish'},
					{code: 'en', name:'English'}
				],

				EMAILS: '@@EMAILS',

				DOMAIN: 'neoteric.eu',
				APP_NAME: 'Neoteric',

			},
			get: function(element) {
				return this.cfg[element];
			},
		};
	});
}());

