define(['docs/documents/owned/module'], function (module) {
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
	function docsDocumentListWidget(neoTableParams, DocumentAPI, $modal) {
		return {
			restrict: 'EA',
			templateUrl: '/app/docs/documents/owned/widgets/documentListWidget/docsDocumentListWidget.html',
			scope: true,
			controllerAs: 'vm',

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.documentTableOptions = new neoTableParams(DocumentAPI);

				// functions
				vm.deleteDocument = deleteDocument;
				vm.openShareModal = openShareModal;

				/**
				 * opens Share Modal
				 * @method openShareModal
				 * @param documentId {app.docs.DocumentTemplate} Model to be removed
				 */
				function openShareModal(documentId) {
					// $scope.modalInstance is required workaround to access injected $modalInstance
					// functions (dismiss, close) inside directives
					$scope.documentId = documentId;
					$scope.modalInstance = $modal.open({
						template: '<docs-share-modal></docs-share-modal>',
						scope: $scope
					});

				}

				/**
				 * Removes selected document template
				 * @method deleteDocumentTemplate
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
