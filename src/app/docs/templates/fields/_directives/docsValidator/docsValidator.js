define(['docs/templates/fields/module'], function (module) {
	'use strict';

	function docsValidator($http, $compile, $log) {

		return {
			restrict: 'EA',
			scope: {
				validator: '='
			},
			link: function (scope, element) {
				if (!_.has(scope.validator, '$templateUrl')) {
					return;
				}

				$http
					.get(scope.validator.$templateUrl)
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						$log.debug('Recompiled view with newly added validator');
					});
			}
		};
	}

	module.directive('docsValidator', docsValidator);
});
