define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Renders list of available validators and handles adding them to composite layer
	 * @class docsAddValidator
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered validators
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsAddValidator($log, ValidatorAPI, FieldValidatorsEnum) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/_directives/docsAddValidator/docs-add-validator.html',
			controllerAs: 'vm',
			controller: function ($scope) {
				var vm = this;

				// variables
				vm.fieldValidators = FieldValidatorsEnum;

				// functions
				vm.addValidator = addValidator;

				/**
				 * @method
				 * @param validatorType {Object} {FieldValidatorsEnum} property
				 */
				function addValidator(validatorType) {
					if (_.findWhere($scope.field.validators, {validatorType: validatorType})) {
						$log.debug('Validator already enabled');
						return;
					}

					var validator = ValidatorAPI.build({validatorType: validatorType});

					$scope.field.validators.$add(validator)
						.$asPromise()
						.then(function () {
							$('#fieldTemplate')
								.formValidation('addField', $scope.field.$name, $scope.field.validators.$encapsulateValidators());
						});

					$log.debug('Added new validator to validator list');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
