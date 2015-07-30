define(['seed/layout/module'], function (module) {
	'use strict';

	module.registerDirective('stateBreadcrumbs', function ($rootScope, $state) {
		return {
			restrict: 'E',
			replace: true,
			template: '<ol class="breadcrumb"></ol>',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {

				/**
				 * Description
				 * @method setBreadcrumbs
				 * @param {} breadcrumbs
				 */
				function setBreadcrumbs(breadcrumbs) {
					var html = '';
					angular.forEach(breadcrumbs, function (crumb) {
						html += '<li>' + crumb + '</li>';
					});
					element.html(html);
				}

				/**
				 * Description
				 * @method fetchBreadcrumbs
				 * @param {} stateName
				 * @param {} breadcrunbs
				 */
				function fetchBreadcrumbs(stateName, breadcrunbs) {

					var state = $state.get(stateName);

					if (state &&
						state.data &&
						state.data.title &&
						breadcrunbs.indexOf(state.data.title) === -1) {
						breadcrunbs.unshift(state.data.title);
					}

					var parentName = stateName.replace(/.?\w+$/, '');
					if (parentName) {
						return fetchBreadcrumbs(parentName, breadcrunbs);
					} else {
						return breadcrunbs;
					}
				}

				/**
				 * Description
				 * @method processState
				 * @param {} state
				 */
				function processState(state) {
					var breadcrumbs;
					if (state.data && state.data.breadcrumbs) {
						breadcrumbs = state.data.breadcrumbs;
					} else {
						breadcrumbs = fetchBreadcrumbs(state.name, []);
					}
					setBreadcrumbs(breadcrumbs);
				}

				processState($state.current);

				$rootScope.$on('$stateChangeStart', function (event, state) {
					processState(state);
				});
			}
		};
	});
});
