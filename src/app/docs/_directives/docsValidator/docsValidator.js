define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering single field validator
	 * @class docsValidator
	 * @memberOf app.docs
	 *
	 * @param $http HTTP communication service
	 * @param $compile Template compilation service
	 * @param $log Logging service
	 * @return {{restrict: string, scope: {validator: string, container: string}, link: Function}}
	 */
	function docsValidator($http, $compile, $log) {

		return {
			restrict: 'EA',
			scope: {
				validator: '=',
				container: '='
			},
			link: function (scope, element) {
				var vm = scope.vm = scope.vm || {};

				// variables

				// functions
				vm.init = init;
				vm.removeValidator = removeValidator;

				init();

				function init() {
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
				}

				function removeValidator() {
					$('#fieldTemplate')
						.formValidation('enableFieldValidators', scope.container.$name, false, scope.validator.validatorType.formValidationKey);

					scope.container.validators.$remove(scope.validator);

					$log.debug('Removed validator form field validators list');
				}

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('docsValidator', docsValidator);
});
