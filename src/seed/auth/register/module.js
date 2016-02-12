define([
	'angular'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.register', []);

	module.config(function ($stateProvider, gettext) {
		$stateProvider
			.state('auth.register', {
				url: '/register',
				views: {
					auth: {
						template: '<auth-register-form></auth-register-form>'
					}
				},
				data: {
					title: gettext('Register')
				}
			});
	});

	return module;
});
