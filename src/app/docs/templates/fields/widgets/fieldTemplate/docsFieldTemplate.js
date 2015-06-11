define(['docs/templates/fields/module'], function (module) {
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
	 * @param CompositeFieldAPI
	 * @param FieldTypesEnum
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsFieldTemplateWidget($previousState, $stateParams, $log, CompositeFieldAPI,
		FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/fields/widgets/fieldTemplate/docs-field-template.html',
			scope: true,
			controllerAs: 'vm',
			controller: function () {

				var vm = this;

				// variables
				vm.compositeField = undefined;

				vm.sortableOptions = {
					handle: '.drag-handle',
					scroll: true,
					axis: 'y',
					items: '> li',
					opacity: 0.5
				};

				// functions
				vm.init = init;
				vm.save = save;
				vm.deleteField = deleteField;

				init();

				/**
				 * Initialize all needed variables on controller set-up
				 * @method init
				 */
				function init() {
					$previousState.memo('caller', 'app.docs.templates.fields');

					if ($stateParams.id) {
						CompositeFieldAPI
							.get($stateParams.id)
							.then(function (model) {
								vm.compositeField = model;
							});

					} else {
						vm.compositeField = CompositeFieldAPI.build({
							fieldType: FieldTypesEnum.COMPOSITE
						});
					}

					$log.debug('Initiated controller');
				}

				/**
				 * Sends model to save it on the server
				 * @method save
				 */
				function save() {
					CompositeFieldAPI
						.save(vm.compositeField)
						.then(function () {
							$previousState.go('caller');
						});

					$log.debug('Saved composite field');
				}

				function deleteField(field) {
					vm.compositeField.composite.$remove(field);
					field.$destroy();

					$log.debug('Removed composite field form container');
				}
			}
		};
	}

	module.directive('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
