define(['docs/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsDocumentWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $previousState {Object} Router state history service
	 * @param $stateParams {Object} Current request param provider
	 * @param $state {Object} UI-Router state service
	 * @param $log {Object} Logging service
	 * @param DocumentAPI {Object} API interface for server communication
	 * @param FieldTypesEnum {Object} Registry of all available Fields
	 * @param Upload {Object} File upload service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentWidget($previousState, $stateParams, $state, $log,
		DocumentAPI, FieldTypesEnum, Upload) {

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/documents/widgets/documentWidget/docsDocumentWidget.html',
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
					$previousState.memo('caller', 'app.docs.documents');

					if ($stateParams.id) {

						if ($stateParams.version) {
							DocumentAPI
								.get($stateParams.id, {version: $stateParams.version})
								.then(function (model) {
									//noinspection JSCheckFunctionSignatures
									model.versions.$refresh();
									vm.documentTemplate = model;
								});
						} else {
							DocumentAPI
								.get($stateParams.id)
								.then(function (model) {
									//noinspection JSCheckFunctionSignatures
									model.versions.$refresh();
									vm.documentTemplate = model;
								});
						}

					} else {
						vm.documentTemplate = DocumentAPI.build({
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
					//Find files to upload
					var fileInputs = findFileInputs(vm.documentTemplate);

					// Send them to server
					_.each(fileInputs, function (file) {
						if (_.has(file, 'value')) {
							Upload
								.upload({
									url: 'http://ntrc-delta.neoteric.eu:9035/api/v1/attachments',
									sendFieldsAs: 'form',
									file: _.first(file.value)
								})
								.then(function (response) {
									file.value = response.url;
								});
						}

						$log.debug('Saved composite field');
					});

					//noinspection JSUnresolvedVariable
					DocumentAPI
						.save(vm.documentTemplate)
						.then(function () {
							$previousState.go('caller');
						});

					$log.debug('Saved composite field');
				}

				/**
				 * Switches between document versions
				 * @param version {Object} version number to be changed to
				 */
				function changeDocumentVersion(version) {
					// If switching to newest version omit postfix version
					//noinspection JSUnresolvedVariable
					if (_.isNull(version.previousVersion)) {
						$log.debug('Switching to document version: ' + version.version);

						$state.go($state.current, {id: $stateParams.id, version: version.version});
					} else {
						$log.debug('Switching to document newest version');

						$state.go($state.current, {id: $stateParams.id, version: null});
					}
				}

				/**
				 * Traverse field structure and find array of file inputs
				 * @param document {Object} Document model
				 * @return {Array} List of found file field inputs
				 */
				function findFileInputs(document) {
					var result = [];
					_.each(document.composite, function (item) {

						if (item.composite.length) {
							findFileInputs(item);
						}

						if (item.$inputType === 'file') {
							result.push(item);
						}
					});

					return result;
				}
			}
		};
	}

	module.directive('docsDocumentWidget', docsDocumentWidget);
});
