define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsDocumentTemplateWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $previousState
	 * @param $stateParams
	 * @param $log
	 * @param docsTemplatesDocumentsModuleConf
	 * @param CompositeFieldAPI
	 * @param FieldTypesEnum
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsDocumentTemplateWidget($previousState, $stateParams, $log,
		docsTemplatesDocumentsModuleConf, CompositeFieldAPI, FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: docsTemplatesDocumentsModuleConf.MODULE_PATH +
			'widgets/documentTemplate/docs-document-template.html',
			scope: true,
			controllerAs: 'vm',
			controller: function () {
				$previousState.memo('caller', 'app.docs.templates.fields');

				var vm = this;

				// variables
				vm.compositeField = CompositeFieldAPI.build({
					fieldType: FieldTypesEnum.COMPOSITE
				});

				vm.sortableOptions = {
					handle: '.drag-handle',
					scroll: true,
					axis: 'y',
					opacity: 0.5
				};

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
			}
		};
	}

	module.directive('docsDocumentTemplateWidget', docsDocumentTemplateWidget);
});
