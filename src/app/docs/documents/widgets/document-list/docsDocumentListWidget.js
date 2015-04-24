define([
	'docs/documents/module'
], function (module) {
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
			templateUrl: '/app/docs/documents/widgets/document-list/docs-document-list.html',
			scope: true,
			controllerAs: 'vm',

			/**
			 * Widget business logic
			 * @methodOf app.docs.documents.docsDocumentListWidget
			 */
			controller: function () {
				var vm = this;

				vm.documentsTableOptions = documentsTableOptions;

				/**
				 * Custom configuration of the task table
				 * @type {neoTableParams|*}
				 */
				var documentsTableOptions = new neoTableParams(DocumentAPI);
			}
		};
	}

	module.registerDirective('docsDocumentListWidget', docsDocumentListWidget);

});
