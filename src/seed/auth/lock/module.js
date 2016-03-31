define([
	'angular'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.lock', []);

	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('auth.lock', {
				url: '/lock',
				views: {
					auth: {
						template: '<auth-lock-form></auth-lock-form>'
					}
				},
				data: {
					title: gettext('Locked Screen'),
					permissions: {
						only: ['AUTHORIZED'],
						redirectTo: 'auth.login'
					}
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.lock.module');
		$log.debug('Initiated module');
	});

	return module;
});
