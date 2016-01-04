define(['seed/graphs/module', 'morris'], function (module) {
	'use strict';

	/**
	 * Creates area graph with morris library
	 * @constructor morrisAreaGraph
	 *
	 * @link https://github.com/morrisjs/morris.js
	 * @example
	 *  <morris-area-graph graph-config="configObject"></morris-area-graph>
	 * @return {{restrict: string, replace: boolean, template: string, scope: {graphConfig: string},
	 *   link: Function}}
	 */
	function morrisAreaGraph() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="chart no-padding"></div>',
			scope: {
				graphConfig: '=',
				config: '='
			},
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {

				var morris;

				scope.config.then(function () {
					scope.$applyAsync(function () {
						morris = Morris.Area(_.extend({
							element: element
						}, scope.graphConfig));
					});
				});

				// listen to data changes
				scope.$watch('graphConfig.data', function (newData, oldData) {

					if (newData !== oldData && morris) {
						morris.setData(newData);
					}
				});

			}
		};
	}

	return module.directive('morrisAreaGraph', morrisAreaGraph);
});
