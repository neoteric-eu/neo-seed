define(['seed/components/module'], function (module) {
	'use strict';

	function neoPageTitle($log, appConf) {
		return {
			restrict: 'A',
			controller: function ($scope, $element) {

				$log = $log.getInstance('seed.components.neoPageTitle');
				$log.debug('Initiated directive');

				$scope.$root.$on('$stateChangeStart', function (event, toState) {
					var title = appConf.generalSettings.name;
					if (_.has(toState.data, 'title')) {
						title += (' | ' + toState.data.title);
					}

					//$scope.$applyAsync(function () {
					$element.text(title);
					//});

					$log.debug('Updated page title attribute');
				});

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoPageTitle', neoPageTitle);
});
