define(['angular'], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.documents.owned', []);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.documents.owned', {
				url: '/docs/documents',
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/owned/views/list.html'
					}
				},
				data: {
					title: gettext('Owned')
				}
			})

			.state('app.docs.documents.owned.new', {
				url: '/new',
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/owned/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.documents.owned.edit', {
				url: '/edit/:id/:version',
				params: {
					version: null
				},
				views: {
					'content@app': {
						templateUrl: '/app/docs/documents/owned/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			});
	});

	return module;
});
