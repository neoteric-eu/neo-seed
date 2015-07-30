define(['angular',
	'angular-couch-potato',
	'angular-ui-router'
], function (ng, couchPotato) {

	"use strict";

	var module = ng.module('app.demo.graphs', [
		'ui.router'
	]);

	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {
		$stateProvider
			.state('app.demo.graphs', {
				abstract: true,
				data: {
					title: 'Graphs'
				}
			})

			.state('app.demo.graphs.flot', {
				url: '/graphs/flot',
				data: {
					title: 'Flot Charts'
				},
				views: {
					"content@app": {
						controller: 'FlotCtrl',
						templateUrl: "apps/demo/modules/graphs/views/flot-charts.html",
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/graphs/controllers/FlotCtrl',
								'apps/demo/modules/graphs/directives/flot/flotBarChart',
								'apps/demo/modules/graphs/directives/flot/flotSinChart',
								'apps/demo/modules/graphs/directives/flot/flotHorizontalBarChart',
								'apps/demo/modules/graphs/directives/flot/flotSalesChart',
								'apps/demo/modules/graphs/directives/flot/flotFillChart',
								'apps/demo/modules/graphs/directives/flot/flotPieChart',
								'apps/demo/modules/graphs/directives/flot/flotSiteStatsChart',
								'apps/demo/modules/graphs/directives/flot/flotAutoUpdatingChart'
							])
						}
					}
				}
			})

			.state('app.demo.graphs.inline', {
				url: '/graphs/inline',
				data: {
					title: 'Inline Charts'
				},
				views: {
					"content@app": {
						templateUrl: "apps/demo/modules/graphs/views/inline-charts.html",
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/graphs/directives/inline/sparklineContainer',
								'apps/demo/modules/graphs/directives/inline/easyPieChartContainer'
							])
						}
					}
				}
			})

			.state('app.demo.graphs.dygraphs', {
				url: '/graphs/dygraphs',
				data: {
					title: 'Dygraphs Charts'
				},
				views: {
					"content@app": {
						templateUrl: "apps/demo/modules/graphs/views/dygraphs-charts.html",
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/graphs/directives/dygraphs/dygraphsNoRollPeriod',
								'apps/demo/modules/graphs/directives/dygraphs/dygraphsNoRollTimestamp'
							])
						}
					}
				}
			})

			.state('app.demo.graphs.chartjs', {
				url: '/graphs/chartjs',
				data: {
					title: 'Chartjs'
				},
				views: {
					"content@app": {
						templateUrl: "apps/demo/modules/graphs/views/chartjs-charts.html",
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/graphs/directives/chartjs/chartjsLineChart',
								'apps/demo/modules/graphs/directives/chartjs/chartjsBarChart',
								'apps/demo/modules/graphs/directives/chartjs/chartjsPolarChart',
								'apps/demo/modules/graphs/directives/chartjs/chartjsDoughnutChart',
								'apps/demo/modules/graphs/directives/chartjs/chartjsRadarChart',
								'apps/demo/modules/graphs/directives/chartjs/chartjsPieChart'
							])
						}
					}
				}
			})
	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});
	return module;

});
