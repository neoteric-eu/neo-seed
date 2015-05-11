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
	 * @param FieldValidatorsEnum
	 * @param $injector
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope:
	 *   {fieldValidators: string}, controller: Function}}
	 */
	function docsAddValidator($log, $injector, fieldsConf, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/_directives/docsAddValidator/docs-add-validator.html',
			controllerAs: 'vm',
			require: '^docsFieldTemplateWidget',
			link: function (scope) {
				scope.enableValidator = enableValidator;

				function enableValidator() {
					$('#fieldTemplate')
						.formValidation('addField', scope.field.$pk, scope.field)
						.formValidation('revalidateField', scope.field.$pk);

					$log.debug('Added new validator to field list');
				}
			},
			controller: function ($scope) {
				var vm = this;

				vm.fieldValidators = FieldValidatorsEnum;

				vm.addValidator = addValidator;

				function addValidator(validator) {

					var validatorClass;

					if ($injector.has(validator.class)) {
						validatorClass = $injector.get(validator.class);
					} else {
						$log.error('Unsupported injectable validator class');
						return;
					}

					validatorClass
						.$build()
						.$asPromise()
						.then(function (model) {
							$scope.field.validators[model.validatorType] = model;
							$scope.enableValidator();
						});
					$log.debug('Attached new validator to validator');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
