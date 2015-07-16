define(['angular'], function (ng) {
	'use strict';

	return {
		cfg: {
			// URL FOR REST CLIENT
			API_URL: 'http://ntrc-delta.neoteric.eu:9000/api/v1/',

			DEBUG: 'true',
			MOD_REWRITE: 'true',

			SENTRY_API_KEY: '',
			SENTRY_OPTIONS: '{}',

			LOGIN_DATA: '[{"login":"admin@neoteric.eu","password":"abc123"},{"login":"admin@preiscoin.com","password":"123qweasd321"},{"login":"jmach@neoteric.eu","password":"abc123"}]',

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

			EMAILS: '{"CONTACT":"contact@neoteric.eu","INFO":"info@neoteric.eu","SUPPORT":"support@neoteric.eu"}',

			DOMAIN: 'neoteric.eu',
			APP_NAME: 'Neoteric Application'
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

