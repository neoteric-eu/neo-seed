define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Displays customized page title based on state of application.
	 * @class neoPageTitle
	 * @memberOf seed.components
	 *
	 * @example
	 * <title neo-page-title></title>
	 *
	 * Along with module definition:
	 *
	 * module.config(function ($stateProvider) {
	 * 	$stateProvider
	 * 	.state('app.dashboard', {
	 * 		[...]
	 * 		data: {
	 * 		title: 'Dashboard'
	 * 		}
	 * 		});
	 * });
	 *
	 * @param $log {Object} Logging service
	 * @param appConf {Object} Application configuration
	 * @returns {{restrict: string, controller: Function}}
	 */
	function neoPageTitle($log, appConf) {
		return {
			restrict: 'A',
			controller: function ($scope, $element, gettextCatalog) {

				$log = $log.getInstance('seed.components.neoPageTitle');
				$log.debug('Initiated directive');

				$scope.$root.$on('$stateChangeStart', function (event, toState) {

					var title = appConf.generalSettings.name;
					if (_.has(toState.data, 'title')) {
						title += (' | ' + gettextCatalog.getString(toState.data.title));
					}
					$element.text(title);

					$log.debug('Updated page title attribute');
				});

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoPageTitle', neoPageTitle);
});
