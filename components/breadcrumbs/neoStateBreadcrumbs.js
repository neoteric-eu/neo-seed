define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Creates a Breadcrumbs line based on state data.title attribute
	 * @class neoStateBreadcrumbs
	 * @memberOf seed.components
	 *
	 * @return {{restrict: string, replace: boolean, templateUrl: string, scope: {}, link: Function}}
	 * @param $rootScope
	 * @param $state
	 *
	 * @example
	 *  <state-breadcrumbs></state-breadcrumbs>
	 *
	 *  State definition object:
	 *
	 * 	.state('app.tasks.tracker.entries', {
   *		url: '...',
   *				views: {...}
   *				data: {
   *					title: 'Entries'
   *				}
   *			})
   */

	function neoStateBreadcrumbs($rootScope, $state) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'seed/components/breadcrumbs/neoStateBreadcrumbs.html',
			scope: {},
			link: function (scope) {

				var vm = scope.vm || (scope.vm = {});

				/**
				 * Recreate on state change
				* */
				$rootScope.$on('$stateChangeStart', function (event, state) {
					processState(state);
				});

				processState($state.current);

				function processState(state) {
					var breadcrumbs;
					if (state.data && state.data.breadcrumbs) {
						breadcrumbs = state.data.breadcrumbs;
					} else {
						breadcrumbs = fetchBreadcrumbs(state.name, []);
					}
					vm.crumbs = breadcrumbs;
				}

				function fetchBreadcrumbs(stateName, breadcrunbs) {
					var state = $state.get(stateName);

					if (state &&	state.data &&  state.data.title && breadcrunbs.indexOf(state.data.title) === -1) {
						breadcrunbs.unshift( {title: state.data.title, stateName: state.name});
					}

					var parentName = stateName.replace(/.?\w+$/, '');
					if (parentName) {
						return fetchBreadcrumbs(parentName, breadcrunbs);
					} else {
						return breadcrunbs;
					}
				}
			}
		};
	}

	module.directive('neoStateBreadcrumbs', neoStateBreadcrumbs);

});
