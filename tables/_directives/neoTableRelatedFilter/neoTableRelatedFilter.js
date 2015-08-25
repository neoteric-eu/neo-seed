define(['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Handles related item selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableRelatedFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {apiName: string, displayProperty: string, ngModel: string}, controller:
	 *   Function}}
	 */
	function neoTableRelatedFilter($log, $injector) {
		$log = $log.getInstance('seed.tables.neoTableRelatedFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				apiName: '=',
				displayProperty: '=',
				ngModel: '='
			},

			controller: function () {
				var vm = this;

				// variables
				vm.filterableAPI = undefined;
				vm.filteredCollection = undefined;
				vm.selectedItem = undefined;

				// methods
				vm.selectRelatedItem = selectRelatedItem;
				vm.filterCollection = filterCollection;

				init();

				/**
				 * Initialize controller
				 */
				function init() {
					if ($injector.has(vm.apiName)) {
						vm.filterableAPI = $injector.get(vm.apiName);
					} else {
						$log.error('Can not inject API ' + vm.apiName);
					}

					$log.debug('Initiated controller');
				}


				/**
				 * Executes search query on resource API
				 * @param searchParam {String}
				 */
				function filterCollection(searchParam) {
					var query = {
						filter: {},
						pageSize: 5
					};
					query.filter[vm.displayProperty] = searchParam;

					vm.filterableAPI
						.filter(query)
						.then(function (collection) {
							vm.filteredCollection = collection;
						});
				}

				/**
				 * Passes back selected model into filters
				 * @param $item {Object} Selected item
				 */
				function selectRelatedItem($item) {
					if ($item) {
						vm.ngModel = $item.id;

						$log.debug('Selected new related model to filer ' + $item[vm.displayProperty]);
					} else {
						vm.ngModel = undefined;
						$log.debug('Cleared related model filter');
					}
				}
			}
		};
	}

	module.directive('neoTableRelatedFilter', neoTableRelatedFilter);
});
