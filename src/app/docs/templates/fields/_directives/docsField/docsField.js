define(['docs/templates/fields/module'], function (module) {
	'use strict';

	function docsField($http, $compile, $log) {

		return {
			restrict: 'EA',
			transclude: true,
			require: '^docsFieldTemplateWidget',
			link: function (scope, element) {
				if (!_.has(scope.field, '$templateUrl')) {
					$log.error('Unsupported field type');
					return;
				}

				$http
					.get(scope.field.$templateUrl)
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						$log.debug('Recompiled view with newly added field');
					});
			}
		};
	}

	module.directive('docsField', docsField);
});
