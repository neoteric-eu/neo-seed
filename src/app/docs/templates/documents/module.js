define([
	'angular'
], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.templates.documents', []);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider.state('app.docs.templates.documents', {
			url: '/docs/templates/documents',
			template: '<div></div>',
			data: {
				title: gettext('Documents')
			}
		});
	});

	return module;
});
