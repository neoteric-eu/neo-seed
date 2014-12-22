(function() {
	'use strict';
	define(['angular'], function(angular) {

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

				DEFAULT_LANG: 'pl',

				EMAILS: '@@EMAILS',

				DOMAIN: 'neoteric.eu',
				APP_NAME: 'Neoteric',

				MOD_REWRITE: '@@MOD_REWRITE'

			},
			get: function(element) {
				return angular.fromJson(this.cfg[element]);
			}
		};
	});
}());

