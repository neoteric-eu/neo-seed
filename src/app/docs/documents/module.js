define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs.templates
	 */
	var module = ng.module('app.docs.documents', [
		'app.docs.documents.owned',
		'app.docs.documents.shared'
	]);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.documents.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.documents', {
				abstract: true,
				data: {
					title: gettext('Document')
				}
			});
	});

	return module;
});
