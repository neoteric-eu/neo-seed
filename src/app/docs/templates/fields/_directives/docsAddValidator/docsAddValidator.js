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
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, require: string, link:
	 *   Function, controller: Function}}
	 */
	function docsAddValidator($log, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.DIRECTIVES_PATH + 'docsAddValidator/docs-add-validator.html',
			require: '^docsFieldTemplateWidget',
			link: function (scope) {
				var vm = scope.vm;

				vm.fieldValidators = FieldValidatorsEnum;

				vm.addValidator = addValidator;

				function addValidator(validatorType) {

					var validator = ValidatorAPI.build({validatorType: validatorType});

					scope.field.validators
						.$collection()
						.$add(validator)
						.$asPromise()
						.then(function () {
							$('#fieldTemplate')
								.formValidation('addField', scope.field.$name, scope.field)
								.formValidation('revalidateField', scope.field.$name);

							$log.debug('Added new validator to validator list');
						});

					$log.debug('Attached new validator to validator');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
