define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering single form field
	 * @class docsField
	 * @memberOf app.docs
	 *
	 * @param $http HTTP {Object} communication service
	 * @param $timeout {Function} Timeout service
	 * @param $compile {Function} Template compilation service
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, scope: {field: string, container: string}, link: Function}}
	 */
	function docsField($http, $timeout, $compile, $log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			controllerAs: 'vm',
			scope: {
				field: '=',
				container: '='
			},

			link: function (scope, element) {

				if (!_.has(scope.field, '$templateUrl')) {
					// If field is composite skip linking
					$log.debug('Composite field without $templateUrl');
					return;
				}

				// Preload template of field
				$http
					.get(scope.field.$templateUrl.toString())
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						// Attach validation rules
						// Should be replaced with asyncApply
						$timeout(function () {
							$('#fieldTemplate')
								.data('formValidation')
								.addField(scope.field.$name, scope.field.validators.$encapsulateValidators());
						});

						$log.debug('Recompiled view with newly added field');
					})
					.error(function () {
						$log.error('Could not fetch filed template');
					});

				$log.debug('Called linking function');
			},

			controller: function ($scope) {
				var vm = this;

				// functions
				vm.deleteField = deleteField;
				vm.toggleCollapse = toggleCollapse;
				vm.isCompositeElement = isCompositeElement;

				function isCompositeElement() {
					return $scope.container.composite.length;
				}

				function deleteField() {
					$('#fieldTemplate').formValidation('removeField', $scope.field.$name);

					$scope.container.composite.$remove($scope.field);
					$scope.field.$destroy();

					$log.debug('Removed field form container');
				}

				function toggleCollapse() {
					//noinspection JSPrimitiveTypeWrapperUsage
					$scope.field.$isEditorCollapsed = !$scope.field.$isEditorCollapsed;

					$log.debug('Collapsed field editor');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsField', docsField);
});
