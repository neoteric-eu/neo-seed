/**
 *	@name neoDocs
 *
 *	@description //TODO: create description
 */

(function() {
	'use strict';

	define([
		'angular',

		'./controllers/DocumentController',
		'./controllers/CreateDocumentController',

		'./services/documentService',
		'./resources/documentResource',

		'./docsUrls',
		'./locale/en_EN',
		'./locale/pl_PL'

	], function(angular, DocumentController, CreateDocumentController,
	documentService, documentResource, docsUrls) {
		var moduleName = 'document';
		var controllers = moduleName + '.controllers';
		// var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( moduleName, [])
			.constant('documentModulePath', './modules/document/')
			.config(docsUrls);

		angular.module( controllers , [] )
			.controller('DocumentController', DocumentController)
			.controller('CreateDocumentController', CreateDocumentController);

		angular.module( services, ['ngResource'] )
			.service('documentService', documentService)
			.service('documentResource', documentResource);
	});
}());
