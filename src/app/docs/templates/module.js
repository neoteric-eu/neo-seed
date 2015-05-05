define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs.templates
	 */
	var module = ng.module('app.docs.templates', [
		'app.docs.templates.documents',
		'app.docs.templates.fields'
	]);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.templates.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.templates', {
				abstract: true,
				data: {
					title: gettext('Template')
				}
			});
	});

	return module;
});
