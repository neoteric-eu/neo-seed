define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	var module = angular.module('app.demo.ui', ['ui.router']);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {

		$stateProvider
			.state('app.demo.ui', {
				abstract: true,
				data: {
					title: 'UI Elements'
				}
			})
			.state('app.demo.ui.general', {
				url: '/ui/general',
				data: {
					title: 'General Elements'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/general-elements.html',
						controller: 'GeneralElementsCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/ui/controllers/GeneralElementsCtrl',
								'apps/demo/modules/ui/directives/smartHtmlPopover',
								'apps/demo/modules/ui/directives/smartProgressbar',
								'apps/demo/modules/ui/directives/smartRideCarousel'
							])
						}
					}
				}
			})
			.state('app.demo.ui.buttons', {
				url: '/ui/buttons',
				data: {
					title: 'Buttons'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/buttons.html',
						controller: 'GeneralElementsCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/ui/controllers/GeneralElementsCtrl',
								'apps/demo/modules/ui/directives/smartHtmlPopover',
								'apps/demo/modules/ui/directives/smartProgressbar',
								'apps/demo/modules/ui/directives/smartRideCarousel'
							])
						}
					}
				}
			})
			.state('app.demo.ui.iconsFa', {
				url: '/ui/icons-font-awesome',
				data: {
					title: 'Font Awesome'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/icons-fa.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/ui/directives/smartClassFilter'
							])
						}
					}
				}
			})
			.state('app.demo.ui.iconsFlags', {
				url: '/ui/icons-flags',
				data: {
					title: 'Flags'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/icons-flags.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/ui/directives/smartClassFilter'
							])
						}
					}
				}
			})
			.state('app.demo.ui.grid', {
				url: '/ui/grid',
				data: {
					title: 'Grid'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/grid.html'
					}
				}
			})
			.state('app.demo.ui.treeView', {
				url: '/ui/tree-view',
				data: {
					title: 'Tree View'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/tree-view.html',
						controller: 'TreeviewCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/ui/controllers/TreeviewCtrl',
								'apps/demo/modules/ui/directives/smartTreeview'
							])
						}
					}
				}
			})
			.state('app.demo.ui.typography', {
				url: '/ui/typography',
				data: {
					title: 'JQuery UI'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/ui/views/typography.html'
					}
				}
			})
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato
	});

	return module;
});
