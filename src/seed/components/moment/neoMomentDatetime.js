define(['seed/module'], function (module) {
	'use strict';

	/**
	 * Applies moment filtering on datetime based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentDatetime
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" moment-datetime></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentDatetime($log) {

		$log = $log.getInstance('seed.components.neoMomentDatetime');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format(moment.ISO_8601);
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value);

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

	module.directive('neoMomentDatetime', neoMomentDatetime);
});
