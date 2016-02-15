/**
 * @namespace seed.auth.registration
 * @memberOf seed.auth
 */

define([
	'angular'
], function (ng) {
	'use strict';

	/**
	 * Enables use registration
	 * @class module
	 * @memberOf seed.auth.registration
	 */
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


	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.register.module');
		$log.debug('Initiated module');
	});

	return module;
});
