define(['seed/graphs/module', 'morris'], function (module) {
	'use strict';

	/**
	 * Creates area graph with morris library
	 * @constructor morrisLineGraph
	 *
	 * @link https://github.com/morrisjs/morris.js
	 * @example
	 *  <morris-line-graph graph-config="configObject"></morris-line-graph>
	 * @return {{restrict: string, replace: boolean, template: string, scope: {graphConfig: string},
	 *   link: Function}}
	 */
	function morrisLineGraph() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="chart no-padding"></div>',
			scope: {
				graphConfig: '='
			},
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {
				var morris = Morris.Line(_.extend({
					element: element
				}, scope.graphConfig));

				// listen to data changes
				var unwatch = scope.$watch('graphConfig.data', function (newData, oldData) {
					if (newData !== oldData) {
						morris.setData(newData);
					}
				});

				// destroy watch with scope
				scope.$on('destroy', function () {
					unwatch();
				});
			}
		};
	}

	return module.directive('morrisLineGraph', morrisLineGraph);
});