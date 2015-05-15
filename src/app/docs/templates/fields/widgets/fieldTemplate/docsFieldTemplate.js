define([
	'docs/templates/fields/module',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsFieldTemplateWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log
	 * @param fieldsConf
	 * @param CompositeFieldAPI
	 * @param FieldTypesEnum
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsFieldTemplateWidget($log, fieldsConf, CompositeFieldAPI, FieldTypesEnum) {
		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			scope: true,
			controllerAs: 'vm',
			/**
			 *
			 * @param $scope
			 */
			controller: function ($scope) {
				var vm = this;

				vm.save = save;

				$scope.compositeField = CompositeFieldAPI.build({fieldType: FieldTypesEnum.COMPOSITE});

				function save() {
					CompositeFieldAPI.save($scope.compositeField);
					$log.debug('Saved composite field');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
