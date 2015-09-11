define(['seed/components/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class momentDatetimeDayrange
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" moment-datetime-dayrange></div>
	 *
	 * @param $log {Object} Logging service
	 * @todo Add to seed
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function momentDatetimeDayrange($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {

				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return {
							lte: value.lte.format('YYYY-MM-DD'),
							gte: value.gte.format('YYYY-MM-DD')
						};
					}
				});

				ngModel.$parsers.push(function (value) {
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
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('momentDatetimeDayrange', momentDatetimeDayrange);
});
