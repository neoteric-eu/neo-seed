define([
	'angular',
	'angular-mocks',
	'seed/auth/_includes',
	'seed/auth/module'
], function () {
	'use strict';

	beforeEach(function () {
		module(function ($provide) {
			$provide.constant('appConf', {
				environmentSettings: {
					predefinedLogins: [{
						login: 'exampleUser',
						password: 'examplePassword'
					}]
				},
				generalSettings: {
					defaultRedirectStateAfterLogin: 'app.dashboard'
				},
				languageSettings: {
					defaultLanguage: {
						name: 'English',
						code: 'gb',
						locale: 'en-GB',
						localePOSIX: 'en_GB'
					}
				}
			});
		});
	});

	beforeEach(function () {
		module('seed.auth');
	});

	require(['seed/auth/test/_services/neoRequestHeaders.spec']);
	require(['seed/auth/test/password/authPasswordResetForm.spec']);
	require(['seed/auth/test/password/authPasswordResetInitForm.spec']);
	require(['seed/auth/test/register/authRegisterForm.spec']);
	require(['seed/auth/test/login/authLoginForm.spec']);
	require(['seed/auth/test/login/authProfileSelectForm.spec']);
});