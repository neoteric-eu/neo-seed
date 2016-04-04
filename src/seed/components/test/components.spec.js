define([
	'angular',
	'angular-mocks',
	'seed/components/_includes'
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
					},
					languageCollection: [
						{
							name: 'Polski',
							code: 'pl',
							locale: 'pl-PL',
							localePOSIX: 'pl_PL'
						},
						{
							name: 'English',
							code: 'gb',
							locale: 'en-GB',
							localePOSIX: 'en_GB'
						},
						{
							name: 'Deutsch',
							code: 'de',
							locale: 'de-DE',
							localePOSIX: 'de_DE'
						}
					]
				}
			});
		});
	});

	beforeEach(function () {
		module('seed.components');
	});

	require(['seed/components/test/activities/neoActivities.spec']);
	require(['seed/components/test/breadcrumbs/bigBreadcrumbs.spec']);
	require(['seed/components/test/breadcrumbs/neoStateBreadcrumbs.spec']);
	require(['seed/components/test/cookieConsent/cookieConsent.spec']);
	require(['seed/components/test/customer/neoCustomerSwitcher.spec']);
	require(['seed/components/test/euLogotypes/neoEuLogotypes.spec']);
	require(['seed/components/test/messages/appMessages.spec']);
	require(['seed/components/test/navigation/neoNavigation.spec']);
	require(['seed/components/test/pageTitle/neoPageTitle.spec']);
	require(['seed/components/test/versionTag/neoVersionTag.spec']);
	require(['seed/components/test/favicon/neoFavicon.spec']);
});