define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param $http HTTP communication service
	 * @param $compile Template compilation service
	 * @param $log Logging service
	 * @return {{restrict: string, controllerAs: string, require: string, link: Function, controller:
	 *   Function}}
	 */
	function docsValidator($http, $compile, $log) {

		return {
			restrict: 'EA',
			controllerAs: 'vm',
			require: '^docsFieldTemplateWidget',
			/**
			 *
			 * @param scope
			 * @param element
			 */
			link: function (scope, element) {
				if (!_.has(scope.validator, '$templateUrl')) {
					$log.error(scope.validator.validatorType +
						' validator does not have $templateUrl attached');
					return;
				}

				$http
					.get(scope.validator.$templateUrl)
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						$log.debug('Recompiled view with newly added validator');
					});

				scope.removeField = removeField;

				function removeField(field, validatorName) {
					$('#fieldTemplate')
						.formValidation('enableFieldValidators', field.$name, false, validatorName)
						.formValidation('revalidateField', field.$name);

					$log.debug('Added filed to validation list');
				}
			},
			/**
			 *
			 * @param $scope
			 */
			controller: function ($scope) {
				var vm = this;

				vm.removeValidator = removeValidator;

				function removeValidator(validatorName) {
					$scope.validator.$destroy()
						.$asPromise()
						.then(function () {
							$scope.field.validators.$destroy(validatorName);
							$scope.removeField($scope.field, validatorName);
							console.log($scope.field);
						});

					$log.debug('Removed validator form field validators list');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsValidator', docsValidator);
});
