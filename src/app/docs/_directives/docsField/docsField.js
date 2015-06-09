define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering single form field
	 * @class docsField
	 * @memberOf app.docs
	 *
	 * @param $http HTTP {Object} communication service
	 * @param $compile {Function} Template compilation service
	 * @param $log {Object} Logging service
	 * @param $timeout {Function} Timeout service
	 * @return {{restrict: string, scope: {field: string, container: string}, link: Function}}
	 */
	function docsField($http, $compile, $log, $timeout) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			scope: {
				field: '=',
				container: '=',
				hideEdit: '&',
				hideRemove: '&',
				hideMove: '&'
			},
			link: function (scope, element) {
				var vm = scope.vm = scope.vm || {};

				// functions
				vm.init = init;
				vm.deleteField = deleteField;
				vm.toggleCollapse = toggleCollapse;
				vm.isCompositeElement = isCompositeElement;

				init();

				function init() {
					if (!_.has(scope.field, '$templateUrl')) {
						$log.debug('Composite field without $templateUrl');
						return;
					}

					$http
						.get(scope.field.$templateUrl.toString())
						.success(function (data) {
							element.html(data);
							$compile(element.contents())(scope);

							// Should be replaced with asyncApply
							$timeout(function () {
								$('#fieldTemplate')
									.data('formValidation')
									.addField(scope.field.$name, scope.field.validators.$encapsulateValidators()
								);
							});

							$log.debug('Recompiled view with newly added field');
						})
						.error(function () {
							$log.error('Could not fetch filed template');
						});


					$log.debug('Called linking function');
				}

				function isCompositeElement() {
					return _.isEmpty(scope.container.templateId);
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
