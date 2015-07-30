define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.misc', ['ui.router']);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('app.demo.misc', {
				abstract: true,
				data: {
					title: 'Miscellaneous'
				}
			})

			.state('app.demo.misc.pricingTable', {
				url: '/pricing-table',
				data: {
					title: 'Pricing Table'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/pricing-table.html'
					}
				}
			})

			.state('app.demo.misc.invoice', {
				url: '/invoice',
				data: {
					title: 'Invoice'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/invoice.html'
					}
				}
			})

			.state('app.demo.misc.error404', {
				url: '/404',
				data: {
					title: 'Error 404'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/error404.html'
					}
				}
			})

			.state('app.demo.misc.error500', {
				url: '/500',
				data: {
					title: 'Error 500'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/error500.html'
					}
				}
			})

			.state('app.demo.misc.blank', {
				url: '/blank',
				data: {
					title: 'Blank'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/blank.html'
					}
				}
			})

			.state('app.demo.misc.emailTemplate', {
				url: '/email-template',
				data: {
					title: 'Email Template'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/email-template.html'
					}
				}
			})

			.state('app.demo.misc.search', {
				url: '/search',
				data: {
					title: 'Search'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/misc/views/search.html'
					}
				}
			})
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
