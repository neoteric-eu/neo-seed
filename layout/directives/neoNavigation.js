define(['seed/layout/module'], function (module) {
	'use strict';

	/**
	 * Composes container navigation using templates
	 * placed in appName/_config/navigation.html
	 * @class neoNavigation
	 *
	 * @param $log {Object} Logging service
	 * @param $q {Object} Angular implementation of promises
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 * @param $compile {Object} Compiles an HTML string or DOM into a template
	 * @param $templateCache {Object} Template caching service
	 * @param appConf {Object} Application configuration
	 * @return {{restrict: string, template: string, controller: Function}}
	 */
	function neoNavigation($log, $q, $http, $compile, $templateCache, appConf) {

		$log = $log.getInstance('seed.layout.neoNavigation');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			template: '<ul></ul>',

			controller: function ($scope, $element) {
				var appsPaths = _
					.chain(appConf.appsSettings)
					.sortBy('order')
					.pluck('path')
					.value();

				var promises = [];

				_.each(appsPaths, function (appPath) {
					var dfd = $q.defer();
					promises.push(dfd.promise);

					// try to get templates from the cache
					var template = $templateCache.get(appPath + '/__misc/_navigation/navigation.html');

					if (template) {
						$element.children().first().append(template);
						dfd.resolve();
						$log.debug('Loaded from cache navigation HTML file from path: ' + appPath);

					} else {
						// If it fails try server request
						$http
							.get(appPath + '/__misc/_navigation/navigation.html')
							.success(function (template) {
								$element.children().first().append(template);
								dfd.resolve();
								$log.debug('Loaded via HTTP navigation HTML file from path: ' + appPath);
							})
							.error(function () {
								dfd.reject();

								$log.error('Could not load navigation HTML from path: ' + appPath);
							});
					}
				});

				$q
					.all(promises)
					.then(function () {
						$element.children().first().attr('data-smart-menu', '');
						$compile($element.contents())($scope);

						$log.debug('Recompiled navigation menu');
					});


				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoNavigation', neoNavigation);
});
