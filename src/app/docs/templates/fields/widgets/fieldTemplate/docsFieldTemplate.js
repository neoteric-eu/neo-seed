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
	 * @param $previousState
	 * @param $stateParams
	 * @param $log
	 * @param fieldsConf
	 * @param CompositeFieldAPI
	 * @param FieldTypesEnum
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsFieldTemplateWidget($previousState, $stateParams, $log, fieldsConf,
		CompositeFieldAPI, FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			scope: true,
			controllerAs: 'vm',
			controller: function () {
				$previousState.memo('caller', 'app.docs.templates.fields');

				var vm = this;

				// variables
				vm.compositeField = CompositeFieldAPI.build({fieldType: FieldTypesEnum.COMPOSITE});

				// functions
				vm.init = init;
				vm.save = save;

				init();

				/**
				 * Initialize all needed variables on controller set-up
				 * @method init
				 */
				function init() {
					$previousState.memo('caller', 'app.tasks.planner');

					if ($stateParams.id) {
						vm.compositeField = CompositeFieldAPI.get($stateParams.id);
					}
				}

				/**
				 * Sends model to save it on the server
				 * @method save
				 */
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
