define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering single form field
	 * @class docsField
	 * @memberOf app.docs
	 *
	 * @param $http HTTP communication service
	 * @param $compile Template compilation service
	 * @param $log Logging service
	 * @return {{restrict: string, scope: {field: string, container: string}, link: Function}}
	 */
	function docsField($http, $compile, $log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			scope: {
				field: '=',
				container: '='
			},
			link: function (scope, element) {
				var vm = scope.vm = scope.vm || {};

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
					//noinspection JSPrimitiveTypeWrapperUsage
					scope.field.$isEditorCollapsed = !scope.field.$isEditorCollapsed;

					$log.debug('Collapsed field editor');
				}
			}
		};
	}

	module.directive('docsField', docsField);
});
