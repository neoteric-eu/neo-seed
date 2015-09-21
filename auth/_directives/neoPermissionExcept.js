define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Shows/hides element for provided permission only
	 * @class neoPermissionExcept
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param Permission {Object} Access permission service
	 * @return {{restrict: string, link: Function}}
	 */
	function neoPermissionExcept($log, Permission) {

		$log = $log.getInstance('seed.auth.neoPermissionExcept');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				try {
					Permission
						.authorize({only: [attrs.neoPermissionExcept]})
						.then(function () {
							element.show();
						})
						.catch(function () {
							element.hide();
						});
				} catch (e) {
					element.hide();
					$log.info(e.message + ': ' + attrs.neoPermissionExcept);
				}

				$log.debug('Called linking function');
			}
		};
	}

	return module.directive('neoPermissionExcept', neoPermissionExcept);
});
