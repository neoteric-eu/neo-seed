define(['docs/templates/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsDocumentTemplateWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $previousState {Object} Router state history service
	 * @param $stateParams {Object} Current request param provider
	 * @param $state {Object} UI-Router state service
	 * @param $log {Object} Logging service
	 * @param DocumentTemplateAPI {Object} API interface for server communication
	 * @param FieldTypesEnum {Object} Registry of all available Fields
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentTemplateWidget($previousState, $stateParams, $state, $log,
		DocumentTemplateAPI,
		FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/documents/widgets/documentTemplate/docs-document-template.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.documentTemplate = undefined;

				// functions
				vm.init = init;
				vm.save = save;
				vm.changeDocumentVersion = changeDocumentVersion;

				init();

				/**
				 * Initializes controller on set-up
				 * @method init
				 */
				function init() {
					$previousState.memo('caller', 'app.docs.documents.fields');

					if ($stateParams.id) {

						if ($stateParams.version) {
							DocumentTemplateAPI
								.get($stateParams.id, {version: $stateParams.version})
								.then(function (model) {
									vm.documentTemplate = model;
								});
						} else {
							DocumentTemplateAPI
								.get($stateParams.id)
								.then(function (model) {
									vm.documentTemplate = model;
								});
						}

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
					//noinspection JSUnresolvedVariable
					DocumentTemplateAPI
						.save(vm.documentTemplate)
						.then(function () {
							$previousState.go('caller');
						});

					$log.debug('Saved composite field');
				}

				/**
				 * Switches between document versions
				 * @param version {String} version number to be changed to
				 */
				function changeDocumentVersion(version) {
					//noinspection JSUnresolvedVariable
					$log.debug('Switching to document version: ' + version.version);

					//noinspection JSUnresolvedVariable
					$state.go($state.current, {id: $stateParams.id, version: version.version});
				}
			}
		};
	}

	module.directive('docsDocumentTemplateWidget', docsDocumentTemplateWidget);
});
