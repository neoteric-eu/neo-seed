define(['docs/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsDocumentWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $q {Object} Angular promise provider
	 * @param $state {Object} UI-Router state service
	 * @param $stateParams {Object} Current request param provider
	 * @param $log {Object} Logging service
	 * @param DocumentAPI {Object} API interface for server communication
	 * @param AttachmentAPI {Object} API interface for server communication
	 * @param FieldTypesEnum {Object} Registry of all available Fields
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentWidget($q, $state, $stateParams, $log, DocumentAPI, AttachmentAPI,
		FieldTypesEnum) {

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/documents/owned/widgets/documentWidget/docsDocumentWidget.html',
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
					if ($stateParams.id) {

						if ($stateParams.version) {
							DocumentAPI
								.get($stateParams.id, {version: $stateParams.version})
								.then(function (model) {
									vm.document = model;
								});
						} else {
							DocumentAPI
								.get($stateParams.id)
								.then(function (model) {
									vm.document = model;
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
										$state.go('app.docs.documents.owned');

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
					var promiseQuery = [];

					_.each(document.composite, function (item) {

						if (item.composite.length) {
							// Go into recursion if fields are composite
							uploadAttachments(item);

						} else {
							// Start upload when file attached only
							if (item.$inputType === 'file' && !_.isEmpty(item.$file)) {
								// Set up new promise for queuing uploading
								var dfd = $q.defer(), promise = dfd.promise;
								promiseQuery.push(promise);

								AttachmentAPI
									.upload(_.first(item.$file))
									.progress(function (e) {
										item.$progress = parseInt(100.0 * e.loaded / e.total);
									})
									.then(function (response) {
										item.value = AttachmentAPI.build(response.data.data);
										dfd.resolve();

										$log.debug('Uploaded file with ID: ' + item.value.id);
									})
									.catch(function () {
										dfd.reject();
									});
							}
						}
					});

					return $q.all(promiseQuery);
				}
			}
		};
	}

	module.directive('docsDocumentWidget', docsDocumentWidget);
});
