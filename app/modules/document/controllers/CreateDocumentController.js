/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams, $location,
			$modal, system, appMessages, locale, documentTemplateService,
			documentService, documentModulePath) {

			// Setup environment
			$scope.dateFormat = 'dd-MM-yyyy, HH:mm';
			$scope.editMode = false;
			$scope.readyToShow = false;
			$scope.templateCreatorMode = false;

			// TODO: remove HARDCODE
			/* jshint unused:false */
			var mocked = {
				'id': '',
				'templateId': null,
				'templateName': null,
				'templateVersion': null,
				'latestTemplateVersion': null,
				'userId': '53576d399d33da5ee72b45d1',
				'email': 'test@neoteric.eu',
				'customerId': '53576d7c9d33da5ee72b45d2',
				'name': 'MOCKED_DOC_ID_2',
				'description': 'lorem ipsum',
				'timestamp': '2014-06-17T11:17:30.997+0200',
				'versions': [
				{
					'version': 1,
					'previousVersion': null,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T13:32:38.049+0200'
				},
				{
					'version': 2,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T13:33:29.167+0200'
				},
				{
					'version': 3,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T15:48:33.920+0200'
				},
				{
					'version': 4,
					'previousVersion': 2,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T15:54:39.953+0200'
				},
				{
					'version': 5,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:04:37.524+0200'
				},
				{
					'version': 6,
					'previousVersion': 5,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:04:49.443+0200'
				},
				{
					'version': 7,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:38:00.900+0200'
				},
				{
					'version': 8,
					'previousVersion': 2,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:38:13.557+0200'
				},
				{
					'version': 9,
					'previousVersion': 3,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:47:50.093+0200'
				},
				{
					'version': 10,
					'previousVersion': 4,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:47:55.126+0200'
				},
				{
					'version': 11,
					'previousVersion': 9,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T17:19:42.165+0200'
				},
				{
					'version': 12,
					'previousVersion': 6,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-17T11:17:30.997+0200'
				}
				],
				'metaFields': [
				{
					'id': '539ed5d6e4b04c1fd3d6e410',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539ed5d6e4b04c1fd3d6e410',
					'fieldName': 'attachment',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'ATTACHMENT',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': {
						name: 'lorem ipsum dolor sit amet',
						icon: 'fa-file-text-o',
						id: '53abfa2be4b020def9bc14c4',
						version: 1
					}
				}
				],
				'version': 12,
				'privileges': [
				'ALL'
				],
				'sharingInfo': null,
				'icon': 'fa-file-text-o'
			};


			/**
			 *	@name init
			 *
			 *	@description
			 *
			 *	The are 4x 'types' of the document:
			 *	- create new by template
			 *	- create new by templateCreator
			 *	- edit document by id
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
				system.showLoader();
				documentTemplateService.getTemplateById(templateId).then(
					function(data) {
						$scope.documentTemplate = data;
						$scope.document.icon = data.icon;
						$scope.document.name = data.name;
						$scope.document.description = data.description;

						$scope.document.templateId = data.id;
						$scope.document.metaFields = data.metaFields;

					}, function() {
						appMessages.error(locale.getT('template_was_not_loaded_please_refresh_browser'));

					}
				).finally(function() {
					$scope.readyToShow = true;
					system.hideLoader();
				});

			};

			/**
			 *	@name editDocumentById
			 *
			 *	@param {String} documentId
			 *	@description Render new document from template
			 */
			$scope.editDocumentById = function(documentId) {
				system.showLoader();
				documentService.getDocumentById(documentId).then(function(data) {
					$scope.editMode = true;
					documentService.activeDocument.setModel(data);
					// documentService.previewDocument.setModel(data);

					$scope.document = documentService.activeDocument.getModel();

				}, function() {
					appMessages.error(locale.getT('Operation_failed'));

				}).finally(function() {
					$scope.readyToShow = true;
					system.hideLoader();
				});
			};

			/**
			 *	@name createNewByTemplateCreator
			 *
			 *	@description Create new document with Template Creator
			 *
			 */
			$scope.createNewByTemplateCreator = function() {
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
				documentTemplateService.getFieldTypes().then(function() {
					$scope.readyToShow = true;
					var primitives = documentTemplateService.primitiveFieldTypes.getModel();
					var complex = documentTemplateService.complexFieldTypes.getModel();
					$scope.fieldTypes = primitives.concat(complex);
					$scope.docSelectedType = $scope.fieldTypes[0];
				}).finally(function() {
					system.hideLoader();
				});
			};


			/**
			 *	@name updateDocument
			 *
			 *	@param {object} document
			 *	@param {bolean} changeLocation
			 */
			$scope.updateDocument = function(document, changeLocation) {
				system.showLoader();
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
				}).finally(function() {
					system.hideLoader();
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

				system.showLoader();
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
				}).finally(function() {
					system.hideLoader();
				});

			};


			$scope.docPreviewModal = function(activeDocument, previewVersion) {
				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/docPreview.html',
					controller: 'PreviewModalController',
					windowClass: 'docPreview',
					resolve: {
						activeDocument: function(){
							return activeDocument;
						},
						previewVersion: function(){
							return previewVersion;
						}
					}
				});

				modalInstance.result.then(function (previewDocument) {
					$scope.document = documentService.activeDocument.getModel();
				});
			};

			$scope.restoreDocumentVersion = function(previewDocument, previewVersion) {
				system.showLoader();
				documentService.restoreDocumentVersion(previewDocument.id, previewVersion.version).then(
					function(data) {
						documentService.activeDocument.setModel(data);
						$scope.document = documentService.activeDocument.getModel();
					}
				).finally(function() {
					system.hideLoader();
				});
			};

		};



		return ['$scope', '$routeParams', '$location', '$modal', 'system',
		'appMessages', 'locale', 'documentTemplateService', 'documentService',
		'documentModulePath', CreateDocumentController];

	});
}());
