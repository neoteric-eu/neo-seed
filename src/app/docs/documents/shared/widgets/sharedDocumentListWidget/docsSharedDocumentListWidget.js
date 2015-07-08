define(['docs/documents/shared/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsDocumentListWidget
	 * @memberOf app.docs.documents
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param SharedDocumentAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsSharedDocumentListWidget(neoTableParams, SharedDocumentAPI) {
		return {
			restrict: 'EA',
			templateUrl: '/app/docs/documents/shared/widgets/sharedDocumentListWidget/docsSharedDocumentListWidget.html',
			scope: true,
			controllerAs: 'vm',

			controller: function () {
				var vm = this;

				// variables
				vm.documentTableOptions = new neoTableParams(SharedDocumentAPI);

				// functions
				vm.deleteDocumentTemplate = deleteDocumentTemplate;

				/**
				 * Removes selected document template
				 * @method deleteDocumentTemplate
				 * @param fieldTemplate {app.docs.DocumentTemplate} Model to be removed
				 */
				function deleteDocumentTemplate(fieldTemplate) {
					SharedDocumentAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsSharedDocumentListWidget', docsSharedDocumentListWidget);

});
