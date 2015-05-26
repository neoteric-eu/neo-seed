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
	 * Module configuration options.fields
	 */
	module.constant('docsModuleConf', {
		MODULE_PATH: '/app/docs',
		DIRECTIVES_PATH: '/app/docs/_directives/',
		FIELD_TEMPLATES_PATH: '/app/docs/_directives/docsField/fields/',
		VALIDATOR_TEMPLATES_PATH: '/app/docs/_directives/docsValidator/validators/'
	});


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
