define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Handles date selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableDateFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {ngModel: string}, controller: Function}}
	 */
	function neoTableDateFilter($log) {
		$log = $log.getInstance('seed.components.neoTableDateFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/tables/directives/neoTableDateFilter/neoTableDateFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				ngModel: '='
			},

			controller: function () {
				var vm = this;

				// variables
				vm.selectedDate = undefined;

				vm.changeDate = function () {
					if (vm.selectedDate) {
						vm.ngModel = vm.selectedDate.format('YYYY-MM-DD');
					} else {
						vm.ngModel = undefined;
					}
				};

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoTableDateFilter', neoTableDateFilter);
});
