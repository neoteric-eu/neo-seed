define(['seed/layout/module'], function (module) {
	'use strict';

	function neoNavigation($log, $q, $http, $compile, appConf) {

		$log = $log.getInstance('seed.layout.neoNavigation');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			template: '<ul data-smart-menu></ul>',
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

					$http
						.get(appPath + '/_config/navigation.html', {cache: true})

						.success(function (data) {
							$element.children().first().append(data);

							dfd.resolve();
						})

						.error(function () {
							$log.debug('Could not load application menu template');

							dfd.reject();
						});
				});

				$q
					.all(promises)
					.then(function () {
						$compile($element.contents())($scope);

						$log.debug('Recompiled navigation menu');
					});


				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoNavigation', neoNavigation);
});
