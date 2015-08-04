define(['angular'], function () {

	'use strict';
	return angular.module('app.conf', [])

		.constant('appConf', {
			appsSettings: [{name: 'Dashboard', path: 'apps/dashboard', order: 0}],
			environmentSettings: {
				debugEnabled: true,
				modRewriteEnabled: true,
				predefinedLogins: [{
					login: 'admin@neoteric.eu',
					password: 'abc123'
				}, {login: 'admin@preiscoin.com', password: '123qweasd321'}, {
					login: 'jmach@neoteric.eu',
					password: 'abc123'
				}],
				apiUrl: 'http://ntrc-delta.neoteric.eu:9035/api/v1/'
			},
			generalSettings: {name: 'Neoteric', defaultStateToRedirectAfterLogin: 'app.dashboard'},
			languageSettings: {
				defaultLanguage: {name: 'English', code: 'gb', locale: 'en_GB'},
				languageCollection: [{name: 'Polski', code: 'pl', locale: 'pl_PL'}, {
					name: 'English',
					code: 'gb',
					locale: 'en_GB'
				}]
			},
			skinSettings: {
				defaultSkin: 'smart-style-0',
				skins: [{
					name: 'smart-style-0',
					logo: 'assets/img/logo.png',
					class: 'btn btn-block btn-xs txt-color-white margin-right-5',
					style: 'background-color:#4E463F;',
					label: 'Smart Default'
				}, {
					name: 'smart-style-1',
					logo: 'assets/img/logo-white.png',
					class: 'btn btn-block btn-xs txt-color-white',
					style: 'background:#3A4558;',
					label: 'Dark Elegance'
				}, {
					name: 'smart-style-2',
					logo: 'assets/img/logo-blue.png',
					class: 'btn btn-xs btn-block txt-color-darken margin-top-5',
					style: 'background:#fff;',
					label: 'Ultra Light'
				}, {
					name: 'smart-style-3',
					logo: 'assets/img/logo-pale.png',
					class: 'btn btn-xs btn-block txt-color-white margin-top-5',
					style: 'background:#f78c40',
					label: 'Google Skin'
				}, {
					name: 'smart-style-4',
					logo: 'assets/img/logo-pale.png',
					class: 'btn btn-xs btn-block txt-color-white margin-top-5',
					style: 'background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;',
					label: 'PixelSmash'
				}, {
					name: 'smart-style-5',
					logo: 'assets/img/logo-pale.png',
					class: 'btn btn-xs btn-block txt-color-white margin-top-5',
					style: 'background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;',
					label: 'Glass'
				}]
			},
			soundSettings: {path: 'assets/sounds/', enabled: true},
			sentrySettings: {}
		})

		;

});
