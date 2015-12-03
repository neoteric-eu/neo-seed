define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Displays the version and build number at the bottom of side navigation panel
	 * @class neoVersionTag
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @param appConf {Object} Container configuration
	 * @return {{restrict: string, templateUrl: string, scope: boolean, link: Function}}
	 */
	function neoVersionTag($log, appConf) {

		$log = $log.getInstance('seed.components.neoVersionTag');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'seed/components/versionTag/neoVersionTag.html',
			scope: true,
			link: function (scope) {
				var vm = scope.vm || (scope.vm = {});
				vm.conf = appConf;
				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoVersionTag', neoVersionTag);
});



