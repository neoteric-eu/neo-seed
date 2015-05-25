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
	 * Module configuration options.fields
	 */
	module.constant('fieldsConf', {
		MODULE_PATH: '/app/docs/templates/fields',
		DIRECTIVES_PATH: '/app/docs/templates/fields/_directives/',
		FIELD_TEMPLATES_PATH: '/app/docs/templates/fields/_directives/docsField/fields/',
		VALIDATOR_TEMPLATES_PATH: '/app/docs/templates/fields/_directives/docsValidator/validators/'
	});

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.templates.fields.module
	 */
	module.config(function ($stateProvider, gettext, fieldsConf) {

		$stateProvider
			.state('app.docs.templates.fields', {
				url: '/docs/templates/fields',
				views: {
					'content@app': {
						templateUrl: fieldsConf.MODULE_PATH + '/views/list.html'
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
						templateUrl: fieldsConf.MODULE_PATH + '/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.templates.fields.edit', {
				url: '/edit',
				views: {
					'content@app': {
						templateUrl: fieldsConf.MODULE_PATH + '/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			});
	});

	return module;
});
