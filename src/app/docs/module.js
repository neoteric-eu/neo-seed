define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs', [
		'app.docs.templates',
		'app.docs.documents'
	]);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider.state('app.docs', {
			abstract: true,
			data: {
				title: gettext('Docs'),
				permissions: {
					only: ['user'],
					redirectTo: 'auth.login'
				}
			}
		});
	});

	return module;
});
