define(['docs/documents/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsDocumentListWidget
	 * @memberOf app.docs.documents
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param DocumentAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsDocumentListWidget(neoTableParams, DocumentAPI) {
		return {
			restrict: 'EA',
			templateUrl: '/app/docs/documents/widgets/documentList/docsDocumentListWidget.html',
			scope: true,
			controllerAs: 'vm',

			controller: function () {
				var vm = this;

				// variables
				vm.documentTableOptions = new neoTableParams(DocumentAPI);

				// functions
				vm.deleteDocument = deleteDocument;

				/**
				 * Removes selected document template
				 * @method deleteDocument
				 * @param fieldTemplate {app.docs.DocumentTemplate} Model to be removed
				 */
				function deleteDocument(fieldTemplate) {
					DocumentAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsDocumentListWidget', docsDocumentListWidget);

});
