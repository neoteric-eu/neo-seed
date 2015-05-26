define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Renders list of available validators and handles adding them to composite layer
	 * @class docsAddValidator
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param docsModuleConf {Object} Module configuration
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered validators
	 * @return {{restrict: string, templateUrl: string, link: Function}}
	 */
	function docsAddValidator($log, docsModuleConf, ValidatorAPI, FieldValidatorsEnum) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: docsModuleConf.DIRECTIVES_PATH + 'docsAddValidator/docs-add-validator.html',
			link: function (scope) {
				var vm = scope.vm = scope.vm || {};

				// variables
				vm.fieldValidators = FieldValidatorsEnum;

				// functions
				vm.addValidator = addValidator;

				/**
				 * @method
				 * @param validatorType {Object} {FieldValidatorsEnum} property
				 */
				function addValidator(validatorType) {
					if (_.findWhere(scope.field.validators, {validatorType: validatorType})) {

						$log.debug('Validator already enabled');
						return;
					}

					var validator = ValidatorAPI.build({validatorType: validatorType});

					scope.field.validators
						.$add(validator)
						.$asPromise()
						.then(function () {
							$('#fieldTemplate')
								.formValidation(
								'addField',
								scope.field.$name,
								scope.field.validators.$encapsulateValidators()
							);
						});

					$log.debug('Added new validator to validator list');
				}

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
