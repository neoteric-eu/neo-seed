define([
	'angular',
	'angular-couch-potato'
], function (ng, couchPotato) {
	'use strict';

	/**
	 * Instantiate the module
	 * @constructor module
	 * @memberof app.docs
	 */
	var module = ng.module('app.docs.templates.documents', []);

	couchPotato.configureApp(module);

	/**
	 * Stores additional module configuration
	 * @method run
	 * @memberof app.docs.module
	 */
	module.config(function ($stateProvider, gettext) {

		$stateProvider.state('app.docs.templates.documents', {
			url: '/docs/templates/documents',
			template: '<div></div>',
			data: {
				title: gettext('Documents')
			}
		});
	});

	/**
	 * Kicks off the module
	 * @method run
	 * @memberof app.docs.module
	 */
	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;
});
