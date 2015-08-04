define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * @class neoPreload
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" moment-date-input></div>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoPreload($log) {

		$log = $log.getInstance('seed.components.neoPreload');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			scope: {
				neoPreload: '='
			},
			link: function () {
				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoPreload', neoPreload);
});
