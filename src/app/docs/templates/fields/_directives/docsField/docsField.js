define(['docs/templates/fields/module'], function (module) {
	'use strict';

	function docsField($http, $compile, $log) {

		return {
			restrict: 'EA',
			scope: {
				field: '='
			},
			link: function (scope, element) {
				if (!_.has(scope.field, '$templateUrl')) {
					throw new TypeError('Unsupported field type');
				}

				$http
					.get(scope.field.$templateUrl)
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						$log.debug('Recompiled view newly added field');
					});
			}
		};
	}

	module.registerDirective('docsField', docsField);
});
