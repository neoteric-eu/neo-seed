define([
	'docs/templates/fields/module'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor
	 * @class docsAddValidator
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log
	 * @param fieldsConf
	 * @param ValidatorAPI
	 * @param FieldValidatorsEnum
	 * @return {{restrict: string, templateUrl: string, link: Function}}
	 */
	function docsAddValidator($log, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.DIRECTIVES_PATH + 'docsAddValidator/docs-add-validator.html',
			link: function (scope) {
				var vm = scope.vm = scope.vm || {};

				// variables
				vm.fieldValidators = FieldValidatorsEnum;

				// functions
				vm.addValidator = addValidator;

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

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
