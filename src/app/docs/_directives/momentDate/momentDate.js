define([
	'docs/module',
	'moment'
], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class momentDate
	 * @memberOf app.docs
	 *
	 * @example
	 * <input type="date" moment-date-input></div>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, link: Function}}
	 */
	function momentDate($log) {
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
						return moment(value, 'YYYY-MM-DD');
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('momentDate', momentDate);
});
