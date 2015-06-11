define([
	'angular',
	'angular-ui-sortable'
], function (ng) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs.templates.fields
	 */
	var module = ng.module('app.docs.templates.fields', ['ui.sortable']);

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

	return module;
});
