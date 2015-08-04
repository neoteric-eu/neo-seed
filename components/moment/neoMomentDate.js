define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentDate
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" neo-moment-date></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentDate($log) {

		$log = $log.getInstance('seed.components.neoMomentDate');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format('YYYY-MM-DD');
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'YYYY-MM-DD');

						if (momentDate.isValid()) {
							return momentDate.toISOString();
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoMomentDate', neoMomentDate);
});
