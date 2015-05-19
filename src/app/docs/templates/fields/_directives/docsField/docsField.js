define(['docs/templates/fields/module'], function (module) {
	'use strict';

	function docsField($http, $compile, $log) {

		return {
			restrict: 'EA',
			scope: {
				field: '=',
				container: '='
			},
			link: function (scope, element) {
				var vm = scope.vm = scope.vm || {};

				// variables
				// functions
				vm.init = init;
				vm.deleteField = deleteField;

				init();

				function init() {
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

				function deleteField() {
					$('#fieldTemplate').formValidation('removeField', scope.field.$name);

					scope.field.$destroy();
					scope.container.composite.$remove(scope.field);

					$log.debug('Removed field form container');
				}
			}
		};
	}

	module.directive('docsField', docsField);
});
