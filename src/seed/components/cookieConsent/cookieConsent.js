define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Creates a Breadcrumbs line based on state data.title attribute
	 * @class cookieConsent
	 * @memberOf seed.components
	 *
	 * @example
	 *  <cookie-consent></cookie-consent>
	 *
	 * @param $log {Object} Logging service
	 * @param neoCookie {seed.auth.neoCookie}
	 */

	function cookieConsent($log, neoCookie) {
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
					var isCookieConsentAccepted = neoCookie.getCookieConsent();
					if (isCookieConsentAccepted) {
						$element.hide();
					}
				}

				function acceptCookies() {
					neoCookie.setCookieConsent(true);
					$element.hide();
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('cookieConsent', cookieConsent);

});
