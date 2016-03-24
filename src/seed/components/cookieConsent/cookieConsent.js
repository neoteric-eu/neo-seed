define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Creates a Breadcrumbs line based on state data.title attribute
	 * @class cookieConsent
	 * @memberOf seed.components
	 *
	 * @return {{restrict: string, replace: boolean, templateUrl: string, scope: {}, link: Function}}
	 * @param $cookies
	 * @param $log {Object} Logging service
	 *              <cookie-consent></cookie-consent>
	 */

	function cookieConsent($cookies, $log) {
		$log = $log.getInstance('seed.components.cookieConsent');

		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'seed/components/cookieConsent/cookieConsent.html',
			scope: {},
			controllerAs: 'vm',
			controller: function ($element) {
				var vm = this || {};

				vm.init = init;
				vm.acceptCookies = acceptCookies;

				vm.init();

				function init() {
					if ($cookies.getObject('cookieConsent')) {
						$element.hide();
					}
				}

				function acceptCookies() {
					$cookies.putObject('cookieConsent', true);
					$element.hide();
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('cookieConsent', cookieConsent);

});
