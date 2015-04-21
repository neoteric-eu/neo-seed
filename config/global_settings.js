define(['angular'], function (ng) {
	'use strict';

	return {
		cfg: {
			// URL FOR REST CLIENT
			API_URL: '@@API_URL',

			DEBUG: '@@DEBUG',
			MOD_REWRITE: '@@MOD_REWRITE',

			SENTRY_API_KEY: '@@SENTRY_API_KEY',
			SENTRY_OPTIONS: '@@SENTRY_OPTIONS',

			LOGIN_DATA: '@@LOGIN_DATA',

			LANGUAGES: [
				{
					name: 'Polski',
					code: 'pl',
					locale: 'pl_PL'
				},
				{
					name: 'English',
					code: 'gb',
					locale: 'en_GB'
				}
			],

			/**
			 * @example
			 * {
			 *		name:'Polish', // this is the language name
			 *		code: 'pl', // this is a country code
			 *		locale: 'pl_PL' // this is an locale code
			 * }
			 * @see http://en.wikipedia.org/wiki/Locale
			 * @see http://en.wikipedia.org/wiki/ISO_639-1
			 */
			DEFAULT_LANG: {
				name: 'Polish',
				code: 'pl',
				locale: 'pl_PL'
			},

			EMAILS: '@@EMAILS',

			DOMAIN: 'neoteric.eu',
			APP_NAME: '@@APP_NAME'
		},

		get: function (element) {
			try {
				return ng.fromJson(this.cfg[element]);
			} catch (e) {
				return this.cfg[element];
			}
		}
	};
});

