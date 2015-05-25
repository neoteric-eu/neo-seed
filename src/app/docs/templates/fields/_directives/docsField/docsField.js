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
				vm.toggleCollapse = toggleCollapse;

				init();

				function init() {
					if (!_.has(scope.field, '$templateUrl')) {
						$log.error('Unsupported field type');
						return;
					}

					$http
						.get(scope.field.$templateUrl.toString())
						.success(function (data) {
							element.html(data);
							$compile(element.contents())(scope);

							$log.debug('Recompiled view with newly added field');
						});


					$log.debug('Called linking function');
				}

				function deleteField() {
					$('#fieldTemplate').formValidation('removeField', scope.field.$name);

					scope.container.composite.$remove(scope.field);
					scope.field.$destroy();

					$log.debug('Removed field form container');
				}

				function toggleCollapse() {
					scope.field.$isEditorCollapsed = !scope.field.$isEditorCollapsed;

					$log.debug('Collapsed field editor');
				}
			}
		};
	}

	module.directive('docsField', docsField);
});
