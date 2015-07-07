define(['docs/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsDocumentWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $q {Object} Angular promise provider
	 * @param $previousState {Object} Router state history service
	 * @param $stateParams {Object} Current request param provider
	 * @param $log {Object} Logging service
	 * @param DocumentAPI {Object} API interface for server communication
	 * @param AttachmentAPI {Object} API interface for server communication
	 * @param FieldTypesEnum {Object} Registry of all available Fields
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentWidget($q, $previousState, $stateParams, $log,
		DocumentAPI, AttachmentAPI, FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/documents/widgets/document/docsDocumentWidget.html',
			controllerAs: 'vm',

			controller: function ($scope, $element) {
				var vm = this;

				// variables
				vm.document = undefined;

				// functions
				vm.init = init;
				vm.save = save;

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
									vm.document = model;
								});
						} else {
							DocumentAPI
								.get($stateParams.id)
								.then(function (model) {
									//noinspection JSCheckFunctionSignatures
									model.versions.$refresh();
									vm.document = model;
									console.log(model);
								});
						}

					} else {
						vm.document = DocumentAPI.build({
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
					var formValidation = $element.find('form').data('formValidation');
					// Manually trigger validation on form
					formValidation.validate();

					// Check if form is valid
					if (formValidation.isValid()) {
						// Upload attachments
						uploadAttachments(vm.document)
							.then(function () {
								//noinspection JSUnresolvedVariable
								DocumentAPI
									.save(vm.document)
									.then(function (model) {
										$previousState.go('caller');

										$log.debug('Saved document with ID:' + model.id);
									});
							});
					}
				}

				/**
				 * Traverse field structure and find array of file inputs
				 * @param document {Object} Document model
				 */
				function uploadAttachments(document) {
					var deferred = $q.defer();

					_.each(document.composite, function (item) {

						if (item.composite.length) {
							uploadAttachments(item);
						} else {
							if (item.$inputType === 'file' && !_.isNull(item.value)) {

								AttachmentAPI
									.upload(_.first(item.value))
									.then(function (response) {
										item.value = response.data.data.id;
										deferred.resolve();

										$log.debug('Uploaded file with ID: ' + item.value);
									})
									.catch(function () {
										deferred.reject();
									});
							}
						}
					});

					return deferred.promise;
				}
			}
		};
	}

	module.directive('docsDocumentWidget', docsDocumentWidget);
});
