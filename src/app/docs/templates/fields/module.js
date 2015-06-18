define([
	'angular',
	'angular-gridster',
	'angular-file-upload'
], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs.templates.fields
	 */
	var module = ng.module('app.docs.templates.fields', ['gridster', 'ngFileUpload']);

	/**
	 * Stores additional module configuration
	 * @method run
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider
			.state('app.docs.templates.fields', {
				url: '/docs/templates/fields',
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/fields/views/list.html'
					}
				},
				data: {
					title: gettext('Field')
				}
			})

			.state('app.docs.templates.fields.new', {
				url: '/new',
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/fields/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.templates.fields.edit', {
				url: '/edit/:id',
				views: {
					'content@app': {
						templateUrl: '/app/docs/templates/fields/views/view.html'
					}
				},
				data: {
					title: gettext('New')
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
				enabled: true,
				handle: '.drag-handle'
			}
		});
	});

	return module;
});
