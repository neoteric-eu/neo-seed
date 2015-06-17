define([
	'angular',
	'angular-gridster'
], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.templates.documents', ['gridster']);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.templates.fields.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.templates.documents', {
				url: '/docs/templates/documents',
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/documents/views/list.html'
					}
				},
				data: {
					title: gettext('Field')
				}
			})

			.state('app.docs.templates.documents.new', {
				url: '/new',
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/documents/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.templates.documents.edit', {
				url: '/edit/:id/:version',
				params: {
					version: null
				},
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/documents/views/view.html'
					}
				},
				data: {
					title: gettext('Edit')
				}
			});
	});

	/**
	 * Set up module's dependencies
	 */
	module.run(function (gridsterConfig) {
		// Gridster configuration
		//noinspection JSUnusedAssignment
		gridsterConfig = _.extend(gridsterConfig, {
			// Row height settings
			rowHeight: 20,
			minSizeY: 4,
			defaultSizeY: 4,
			// Row width settings
			minSizeX: 2,
			maxSizeX: 6,
			defaultSizeX: 3,
			resizable: {
				enabled: true,
				handles: ['se']
			},
			draggable: {
				handle: '.drag-handle'
			}
		});
	});

	return module;
});
