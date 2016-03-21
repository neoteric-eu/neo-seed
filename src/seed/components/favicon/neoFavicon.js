define(['seed/components/module'], function (module) {
	'use strict';

	function neoFavicon($log, appConf) {
		return {
			restrict: 'A',
			compile: function (tElement) {

				$log = $log.getInstance('seed.components.neoFavicon');
				$log.debug('Initiated directive');

				if(!appConf.generalSettings.favicon) {
					return;
				}

				if(appConf.generalSettings.favicon.sizes) {
					tElement.attr('sizes', appConf.generalSettings.favicon.sizes);
				}

				if (appConf.generalSettings.favicon.uri) {
					tElement.attr('href', appConf.generalSettings.favicon.uri);
				}
			}
		};
	}

	module.directive('neoFavicon', neoFavicon);
});
