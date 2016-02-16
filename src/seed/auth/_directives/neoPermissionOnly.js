define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Shows/hides element for other than provided permission only
	 * @class neoPermissionOnly
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param Permission {Object} Access permission service
	 * @return {{restrict: string, link: Function}}
	 */
	function neoPermissionOnly($log, Permission) {

		$log = $log.getInstance('seed.auth.neoPermissionOnly');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				try {
					Permission
						.authorize({only: [attrs.neoPermissionOnly]})
						.then(function () {
							element.show();
						})
						.catch(function () {
							element.hide();
						});
				} catch (e) {
					element.hide();
					$log.info(e.message + ': ' + attrs.neoPermissionOnly);
				}

				$log.debug('Called linking function');
			}
		};
	}

	return module.directive('neoPermissionOnly', neoPermissionOnly);
});
