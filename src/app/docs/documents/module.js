define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.documents', []);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.documents', {
				url: '/docs/documents',
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/views/list.html',
					}
				},
				data: {
					title: gettext('Documents')
				}
			});
	});

	return module;
});
