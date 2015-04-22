/*jshint newcap: false */
(function () {
	'use strict';
	define([], function () {

		var CreateDocumentController = function ($scope, $routeParams, $location,
		                                         $modal, system, appMessages, locale, documentTemplateService,
		                                         documentService, documentModulePath) {

			// Setup environment
			$scope.dateFormat = 'dd-MM-yyyy, HH:mm';
			$scope.editMode = false;
			$scope.readyToShow = false;
			$scope.templateCreatorMode = false;

			/**
			 *  @name init
			 *
			 *  @description
			 *
			 *  The are 4x 'types' of the document:
			 *  - create new by template
			 *  - create new by templateCreator
			 *  - edit document by id
			 *  - view document by id (only view)
			 *
			 */

			$scope.init = function () {

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
			 *  @name createNewByTemplate
			 *
			 *  @param {String} templateId
			 *  @description Render new document from template
			 */
			$scope.createNewByTemplate = function (templateId) {
				$scope.document = {};
				system.showLoader();
				documentTemplateService.getTemplateById(templateId).then(
					function (data) {
						$scope.documentTemplate = data;
						$scope.document.icon = data.icon;
						$scope.document.name = data.name;
						$scope.document.description = data.description;

						$scope.document.templateId = data.id;
						$scope.document.metaFields = data.metaFields;

					}, function () {
						appMessages.error(locale.getT('template_was_not_loaded_please_refresh_browser'));

					}
				).finally(function () {
						$scope.readyToShow = true;
						system.hideLoader();
					});

			};

			/**
			 *  @name editDocumentById
			 *
			 *  @param {String} documentId
			 *  @description Render new document from template
			 */
			$scope.editDocumentById = function (documentId) {
				system.showLoader();
				documentService.getDocumentById(documentId).then(function (data) {
					$scope.editMode = true;
					documentService.activeDocument.setModel(data);
					// documentService.previewDocument.setModel(data);

					$scope.document = documentService.activeDocument.getModel();

				}, function () {
					appMessages.error(locale.getT('Operation_failed'));

				}).finally(function () {
					$scope.readyToShow = true;
					system.hideLoader();
				});
			};

			/**
			 *  @name createNewByTemplateCreator
			 *
			 *  @description Create new document with Template Creator
			 *
			 */
			$scope.createNewByTemplateCreator = function () {
				system.showLoader();
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
				documentTemplateService.getFieldTypes().then(function () {
					$scope.readyToShow = true;
					var primitives = documentTemplateService.primitiveFieldTypes.getModel();
					var complex = documentTemplateService.complexFieldTypes.getModel();
					$scope.fieldTypes = primitives.concat(complex);
					$scope.docSelectedType = $scope.fieldTypes[0];
				}).finally(function () {
					system.hideLoader();
				});
			};


			/**
			 *  @name updateDocument
			 *
			 *  @param {object} document
			 *  @param {bolean} changeLocation
			 */
			$scope.updateDocument = function (document, changeLocation) {
				system.showLoader();
				documentService.updateDocument(document).then(function () {

					if (changeLocation) {
						$location.path('/documents');
					} else {
						$scope.document = documentService.activeDocument.getModel();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function () {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function () {
					system.hideLoader();
				});


			};

			/**
			 *  @name saveDocument
			 *
			 *  @param {object} document
			 *  @param {bolean} changeLocation
			 */
			$scope.saveDocument = function (document, changeLocation) {
				if (angular.isDefined(document.version)) {
					$scope.updateDocument(document, changeLocation);
					return;
				}

				system.showLoader();
				documentService.createDocument(document).then(function () {
					if (changeLocation) {
						$location.path('/documents');
					} else {
						$scope.document = documentService.activeDocument.getModel();
						$location.path('/document/edit/' + $scope.document.id);
						$scope.init();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function () {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function () {
					system.hideLoader();
				});

			};


			$scope.docPreviewModal = function (activeDocument, previewVersion) {
				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/docPreview.html',
					controller: 'PreviewModalController',
					windowClass: 'docPreview',
					resolve: {
						activeDocument: function () {
							return activeDocument;
						},
						previewVersion: function () {
							return previewVersion;
						}
					}
				});

				modalInstance.result.then(function () {
					$scope.document = documentService.activeDocument.getModel();
				});
			};

			$scope.restoreDocumentVersion = function (previewDocument, previewVersion) {
				system.showLoader();
				documentService.restoreDocumentVersion(previewDocument.id, previewVersion.version).then(
					function (data) {
						documentService.activeDocument.setModel(data);
						$scope.document = documentService.activeDocument.getModel();
					}
				).finally(function () {
						system.hideLoader();
					});
			};

		};


		return ['$scope', '$routeParams', '$location', '$modal', 'system',
			'appMessages', 'locale', 'documentTemplateService', 'documentService',
			'documentModulePath', CreateDocumentController];

	});
}());
