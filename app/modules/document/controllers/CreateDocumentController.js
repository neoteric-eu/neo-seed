/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams, $location,
			appMessages, locale, documentTemplateService, documentService) {

			// Setup environment
			$scope.dateFormat = 'dd-MM-yyyy';
			$scope.editMode = false;
			$scope.readyToShow = false;
			$scope.templateCreatorMode = false;

			/**
			 *	@name init
			 *
			 *	@description
			 *
			 *	The are 4x "types" of the document:
			 *	+ create new by template
			 *	- create new by templateCreator
			 *	+ edit document by id
			 *	- view document by id (only view)
			 *
			 */
			$scope.init = function() {

				var templateId = $routeParams.templateId;
				var documentId = $routeParams.documentId;

				if (angular.isDefined(templateId)) {
					$scope.createNewByTemplate(templateId);
					return;
				} else if (angular.isDefined(documentId)) {
					$scope.editDocumentById(documentId);
					return;
				} else {
					$scope.createNewByTemplateCreator();

				}
			};


			/**
			 *	@name createNewByTemplate
			 *
			 *	@param {String} templateId
			 *	@description Render new document from template
			 */
			$scope.createNewByTemplate = function(templateId) {
				$scope.document = {};

				documentTemplateService.getTemplateById(templateId).then(function(data) {
					$scope.documentTemplate = data;
					$scope.document.icon = data.icon;
					$scope.document.name = data.name;
					$scope.document.description = data.description;

					$scope.document.templateId = data.id;
					$scope.document.metaFields = data.metaFields;

				}, function() {
					appMessages.error(locale.getT('template_was_not_loaded_please_refresh_browser'));

				}).finally(function() {
					$scope.readyToShow = true;

				});

			};

			/**
			 *	@name editDocumentById
			 *
			 *	@param {String} documentId
			 *	@description Render new document from template
			 */
			$scope.editDocumentById = function(documentId) {

				documentService.getDocumentById(documentId).then(function() {
					$scope.editMode = true;
					$scope.document = documentService.activeDocument.getModel();

				}, function() {
					appMessages.error(locale.getT('Operation_failed'));

				}).finally(function() {
					$scope.readyToShow = true;

				});
			};

			/**
			 *	@name createNewByTemplateCreator
			 *
			 *	@description Create new document with Template Creator
			 *
			 */
			$scope.createNewByTemplateCreator = function() {
				// Setup environment
				$scope.templateCreatorMode = true;
				$scope.editMode = true;

				// Init empty document
				$scope.document = {};
				$scope.document.description = '';
				$scope.document.icon = documentTemplateService.iconsArray.getModel()[0];
				$scope.document.metaFields = [];
				$scope.document.name = locale.getT('New_document');

				// Get field types
				documentTemplateService.getFieldTypes().then(function() {
					$scope.readyToShow = true;
					$scope.fieldTypes = documentTemplateService.primitiveFieldTypes.getModel();
					$scope.docSelectedType = $scope.fieldTypes[0];
				});
			};


			/**
			 *	@name updateDocument
			 *
			 *	@param {object} document
			 *	@param {bolean} changeLocation
			 */
			$scope.updateDocument = function(document, changeLocation) {

				documentService.updateDocument(document).then(function() {

					if (changeLocation) {
						$location.path('/documents');
					} else {
						$scope.document = documentService.activeDocument.getModel();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				});


			};

			/**
			 *	@name saveDocument
			 *
			 *	@param {object} document
			 *	@param {bolean} changeLocation
			 */
			$scope.saveDocument = function(document, changeLocation) {
				if (angular.isDefined(document.version)) {
					$scope.updateDocument(document, changeLocation);
					return;
				}

				documentService.createDocument(document).then(function() {
					if (changeLocation) {
						$location.path('/documents');
					} else {
						$scope.document = documentService.activeDocument.getModel();
						$location.path('/document/edit/' + $scope.document.id);
						$scope.init();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				});

			};



		};

		return ['$scope', '$routeParams', '$location', 'appMessages', 'locale',
		'documentTemplateService', 'documentService', CreateDocumentController];
	});
}());
