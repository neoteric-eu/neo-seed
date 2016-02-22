define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.password', []);

	module.config(function ($stateProvider, gettext) {
		$stateProvider
			.state('auth.forgotPassword', {
				onEnter: function ($state) {
					$state.go('auth.password.reset');
				}
			})

			.state('auth.passwordReset', {
				url: '/password/reset',
				views: {
					'auth': {
						template: '<auth-password-reset-init-form></auth-password-reset-init-form>'
					}
				},
				data: {
					title: gettext('Reset password')
				}
			})

			.state('auth.passwordResetFinish', {
				url: '/password/reset/:token',
				views: {
					'auth': {
						template: '<auth-password-reset-form></auth-password-reset-form>'
					}
				},
				data: {
					title: gettext('New password')
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.password.module');

		$log.debug('Initiated module');
	});

	return module;
});
