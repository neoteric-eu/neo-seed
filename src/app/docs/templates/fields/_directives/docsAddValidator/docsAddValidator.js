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
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope:
	 *   {fieldValidators: string}, controller: Function}}
	 */
	function docsAddValidator($log, fieldsConf, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/_directives/docsAddValidator/docs-add-validator.html',
			controllerAs: 'vm',
			scope: {
				fieldValidators: '='
			},
			controller: function () {
				var vm = this;

				vm.fieldValidators = FieldValidatorsEnum;

				vm.addValidator = addValidator;

				function addValidator() {

					$log.debug('Attached to field new validator');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddValidator', docsAddValidator);
});
