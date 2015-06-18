define(['docs/templates/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user defined field templates
	 * @class docsDocumentTemplateListWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param DocumentTemplateAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentTemplateListWidget(neoTableParams, DocumentTemplateAPI) {

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
				 * @param fieldTemplate {app.docs.DocumentTemplate} Model to be removed
				 */
				function deleteDocumentTemplate(fieldTemplate) {
					DocumentTemplateAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsDocumentTemplateListWidget', docsDocumentTemplateListWidget);
});
