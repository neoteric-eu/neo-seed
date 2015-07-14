define(['app', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on datetime based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class momentDatetime
	 * @memberOf app.components
	 *
	 * @example
	 * <input type="date" moment-date-input></div>
	 *
	 * @param $log {Object} Logging service
	 * @todo Add to seed
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function momentDatetime($log) {
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

	module.directive('momentDatetime', momentDatetime);
});
