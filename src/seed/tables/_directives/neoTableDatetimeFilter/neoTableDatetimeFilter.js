define(['seed/tables/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Handles datetime selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableDatetimeFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {ngModel: string}, controller: Function}}
	 */

	function neoTableDatetimeFilter($log) {
		$log = $log.getInstance('seed.tables.neoTableDatetimeFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableDatetimeFilter/neoTableDatetimeFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				ngModel: '='
			},

			controller: function () {
				var vm = this || {};

				// variables
				vm.selectedDate = undefined;

				vm.changeDate = function () {
					vm.ngModel = vm.parse(vm.selectedDate);
				};

				vm.parse = function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'YYYY-MM-DD');

						if (momentDate.isValid()) {
							return {
								gte: momentDate.toISOString(),
								lte: momentDate.add(1, 'days').toISOString()
							};
						} else {
							return undefined;
						}
					}
				};

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoTableDatetimeFilter', neoTableDatetimeFilter);
});
