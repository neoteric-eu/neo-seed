define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.documents.shared', []);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.documents.shared', {
				url: '/docs/shared',
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/shared/views/list.html'
					}
				},
				data: {
					title: gettext('Shared')
				}
			})

			.state('app.docs.documents.shared.new', {
				url: '/new',
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/shared/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.documents.shared.edit', {
				url: '/shared/edit/:id/:version',
				params: {
					version: null
				},
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/shared/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			});
	});

	return module;
});
