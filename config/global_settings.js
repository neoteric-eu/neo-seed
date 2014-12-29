(function() {
	'use strict';

	/**
	 * @example
	 * {
	 *		name:'Polish', // this is the language name
	 *		code: 'pl', // this is a country code
	 *		locale: 'pl_PL' // this is an locale code
	 * }
	 *
	 * @see http://en.wikipedia.org/wiki/Locale
	 * @see http://en.wikipedia.org/wiki/ISO_639-1
	 */
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
				LANGUAGES: [{
					name:'Polish',
					code: 'pl',
					locale: 'pl_PL'
				},{
					name:'English',
					code: 'gb',
					locale: 'en_GB'
				}],

				DEFAULT_LANG: {
					name:'Polish',
					code: 'pl',
					locale: 'pl_PL'
				},

				EMAILS: '@@EMAILS',

				DOMAIN: 'neoteric.eu',
				APP_NAME: 'Neoteric',

				MOD_REWRITE: '@@MOD_REWRITE',
				COOKIE_DOMAIN: '@@COOKIE_DOMAIN'
			},
			get: function(element) {
				try {
					return angular.fromJson(this.cfg[element]);
				} catch(e) {
					return this.cfg[element];
				}
			}
		};
	});
}());

