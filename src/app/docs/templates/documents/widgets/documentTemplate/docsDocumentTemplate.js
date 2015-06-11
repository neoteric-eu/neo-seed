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
	 * @param DocumentTemplateAPI
	 * @param FieldTypesEnum
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsDocumentTemplateWidget($previousState, $stateParams, $log, DocumentTemplateAPI,
		FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/documents/widgets/documentTemplate/docs-document-template.html',
			scope: true,
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.documentTemplate = undefined;

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
					$previousState.memo('caller', 'app.docs.templates.fields');

					if ($stateParams.id) {
						vm.documentTemplate = DocumentTemplateAPI.get($stateParams.id);
					} else {
						vm.documentTemplate = DocumentTemplateAPI.build({
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
					DocumentTemplateAPI
						.save(vm.documentTemplate)
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
