define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs.templates.fields
	 */
	var module = ng.module('app.docs.templates.fields', []);

	/**
	 * Module configuration options.fields
	 */
	module.constant('fieldsConf', {
		MODULE_PATH: '/app/docs/templates/fields'
	});

	couchPotato.configureApp(module);


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
			});
	});

	/**
	 * Kicks off the module
	 * @method run
	 * @memberof app.docs.templates.fields.module
	 */
	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
