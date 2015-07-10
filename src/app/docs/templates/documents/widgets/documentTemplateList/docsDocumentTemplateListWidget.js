define(['docs/templates/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user defined field templates
	 * @class docsDocumentTemplateListWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param neoTableParams {Function} Table configuration object
	 * @param DocumentTemplateAPI {Object} API interface for server communication
	 * @param DocumentAPI {Object} API interface for server communication
	 * @param gettextCatalog {Object} Translation catalog provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentTemplateListWidget(neoTableParams, DocumentTemplateAPI, DocumentAPI,
		gettextCatalog) {

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/documents/widgets/documentTemplateList/docs-document-template-list.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.fieldTemplatesTableOptions = new neoTableParams(DocumentTemplateAPI);

				// functions
				vm.deleteDocumentTemplate = deleteDocumentTemplate;


				/**
				 * Removes selected document template
				 * @method deleteDocumentTemplate
				 * @param documentTemplate {app.docs.DocumentTemplate} Model to be removed
				 */
				function deleteDocumentTemplate(documentTemplate) {

					DocumentAPI
						.filter({filter: {templateId: documentTemplate.id}})
						.then(function (collection) {

							// Display confirmation dialog
							$.SmartMessageBox({
								title: '<i class="fa fa-warning  txt-color-yellow"></i> ' +
								gettextCatalog.getString('Confirmation'),
								content: gettextCatalog.getString('Are you sure you want to remove item? There are ') +
								collection.length +
								gettextCatalog.getString(' documents created based on this template.'),
								buttons: '[' +
								gettextCatalog.getString('No') +
								'][' +
								gettextCatalog.getString('Yes') +
								']'
							}, function (choice) {
								if (choice === gettextCatalog.getString('Yes')) {
									return documentTemplate
										.$destroy()
										.$asPromise()
										.then(function () {
											appMessages.success('Removed ' + model.type);
											$log.debug('Removed DocumentTemplate with ID: ' + documentTemplate.id);
										})
										.catch(function () {
											$log.error('Could not remove DocumentTemplate with ID: ' +
												documentTemplate.id);
										});
								}
							});
						});
				}
			}
		};
	}

	module.directive('docsDocumentTemplateListWidget', docsDocumentTemplateListWidget);
});
