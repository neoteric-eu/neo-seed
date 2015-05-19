define([
	'angular',
	'docs/templates/fields/module'
], function (ng, module) {
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
			controller: function () {
				var vm = this;

				// variables
				vm.compositeField = CompositeFieldAPI.build({fieldType: FieldTypesEnum.COMPOSITE});

				// functions
				vm.save = save;

				function save() {
					CompositeFieldAPI.save(vm.compositeField);
					$log.debug('Saved composite field');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
