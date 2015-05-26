define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user defined field templates
	 * @class docsDocumentTemplateListWidget
	 * @memberOf app.docs.templates.documents
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param docsTemplatesDocumentsModuleConf {Object} Module configuration
	 * @param CompositeFieldAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentTemplateListWidget(neoTableParams, CompositeFieldAPI,
		docsTemplatesDocumentsModuleConf) {

		return {
			restrict: 'EA',
			templateUrl: docsTemplatesDocumentsModuleConf.MODULE_PATH +
			'/widgets/documentTemplateList/docs-document-template-list.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.fieldTemplatesTableOptions = new neoTableParams(CompositeFieldAPI);

				// methods
				vm.removeFieldTemplate = removeFieldTemplate;

				function removeFieldTemplate(fieldTemplate) {
					CompositeFieldAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsDocumentTemplateListWidget', docsDocumentTemplateListWidget);
});
