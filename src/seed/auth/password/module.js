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

			.state('auth.password', {
				abstract: true,
				url: '/password'
			})

			.state('auth.password.reset', {
				url: '/reset',
				views: {
					'content': {
						template: '<reset-password-form></reset-password-form>'
					}
				},
				data: {
					title: gettext('Reset password')
				}
			})

			.state('auth.password.reset.finish', {
				onEnter: function ($state, $stateParams) {
					if (!$stateParams.token) {
						return $state.go('auth.login');
					}
				},
				url: '/:token',
				views: {
					'auth': {
						template: '<new-password-form></new-password-form>'
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
