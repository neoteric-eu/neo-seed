define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param $http HTTP communication service
	 * @param $compile Template compilation service
	 * @param $log Logging service
	 * @return {{restrict: string, transclude: boolean, require: string, link: Function}}
	 * @param FieldValidatorsEnum
	 */
	function docsValidator($http, $compile, $log, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			scope: {
				validator: '=',
				container: '='
			},
			/**
			 * Directive linking function
			 * @param scope {Object} Local scope provider
			 * @param element {Object} Directives' DOM attachment reference
			 */
			link: function (scope, element) {
				var vm = scope.vm = scope.vm || {};

				// variables

				// functions
				vm.init = init;
				vm.removeValidator = removeValidator;

				init();

				function init() {
					if (!_.has(scope.validator, '$templateUrl')) {
						$log.error(scope.validator.validatorType + ' validator does not have $templateUrl attached');
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

				function removeValidator() {
					$('#fieldTemplate')
						.formValidation('enableFieldValidators', scope.container.$name, false, FieldValidatorsEnum.getKeyByValue(scope.validator))
						.formValidation('revalidateField', scope.container.$name);

					scope.container.validators.$remove(scope.validator);

					$log.debug('Removed validator form field validators list');
				}

				$log.debug('Initiated link');
			}
		};
	}

	module.directive('docsValidator', docsValidator);
});
