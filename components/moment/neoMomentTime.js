define([
	'seed/components/module',
	'moment'
], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentTime
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" neo-moment-date></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentTime($log) {

		$log = $log.getInstance('seed.components.neoMomentTime');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format('LT');
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'LT');
						if (momentDate.isValid()) {
							return momentDate;
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoMomentTime', neoMomentTime);
});
