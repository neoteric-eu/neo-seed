define(['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Handles enum selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableEnumFilter
	 * @memberOf seed.components
	 * @example
	 * <td filter="{'type': 'enum'}"
	 *     filter-data="{enumName:'TypeEnum', displayProperty: 'label'}">
	 *     {{task.type.label}}
	 * </td>
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {enumName: string, displayProperty: string, ngModel: string}, controller:
	 *   Function}}
	 */
	function neoTableEnumFilter($log, $injector) {

		$log = $log.getInstance('seed.tables.neoTableEnumFilter');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				enumName: '=',
				displayProperty: '=',
				ngModel: '='
			},

			controller: function () {
				var vm = this || {};

				// variables
				vm.filterableEnum = undefined;
				vm.selectedItem = undefined;

				// methods
				vm.init = init;
				vm.selectEnumItem = selectEnumItem;

				init();

				/**
				 * Initialize controller
				 */
				function init() {
					if ($injector.has(vm.enumName)) {
						vm.filterableEnum = $injector.get(vm.enumName);
					} else {
						$log.error('Can not inject enum ' + vm.enumName);
					}

					$log.debug('Initiated controller');
				}

				/**
				 * Passes back selected enum key into filters
				 * @param $item {Object} Selected item
				 */
				function selectEnumItem($item) {
					if ($item) {
						vm.ngModel = vm.filterableEnum.getKeyByValue($item);
						$log.debug('Selected new enum item to filer ' + $item[vm.displayProperty]);
					} else {
						vm.ngModel = undefined;
						$log.debug('Cleared enum model filter');
					}

				}
			}
		};
	}

	module.directive('neoTableEnumFilter', neoTableEnumFilter);
});
