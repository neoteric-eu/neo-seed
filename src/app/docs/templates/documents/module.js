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
	 * Module configuration options.fields
	 */
	module.constant('docsTemplatesDocumentsModuleConf', {
		MODULE_PATH: '/app/docs/templates/documents/'
	});

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.templates.fields.module
	 */
	module.config(function ($stateProvider, gettext, docsTemplatesDocumentsModuleConf) {

		$stateProvider
			.state('app.docs.templates.documents', {
				url: '/docs/templates/documents',
				views: {
					'content@app': {
						templateUrl: docsTemplatesDocumentsModuleConf.MODULE_PATH + '/views/list.html'
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
						templateUrl: docsTemplatesDocumentsModuleConf.MODULE_PATH + '/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			})

			.state('app.docs.templates.documents.edit', {
				url: '/edit',
				views: {
					'content@app': {
						templateUrl: docsTemplatesDocumentsModuleConf.MODULE_PATH + '/views/view.html'
					}
				},
				data: {
					title: gettext('New')
				}
			});
	});

	return module;
});
