/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams, $location,
			appMessages, locale, documentTemplateService, documentService, $modal, documentModulePath) {

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

			/* jshint  quotmark: false */
			var mockedTemplate = {
				"id": "53970ec4e4b07061e6405ba1",
				"templateId": "53970e6ee4b07061e6405b9f",
				"templateName": "Prosty",
				"templateVersion": 1,
				"latestTemplateVersion": 1,
				"userId": "5357699c9d33da5ee72b45ce",
				"email": "admin@neoteric.eu",
				"customerId": "5351090b8fe7f4e7b99d6e67",
				"name": "foo",
				"description": "bar",
				"timestamp": null,
				"versions": [{
					"version": 1,
					"previousVersion": null,
					"author": "admin@neoteric.eu",
					"timestamp": "2014-06-10T15:57:24.431"
				}],
				"metaFields": [
				{
					"id": "53970e6ee4b07061e6405b9e",
					"fieldName": "Tekst",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [
					""
					],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": ""
				}
				],
				"version": 1,
				"privileges": [
				"ALL"
				],
				"sharingInfo": null
			};

			var mockedDocument =  {
    "id": "5398338ce4b07061e6405bb0",
    "templateId": "53970e6ee4b07061e6405b9f",
    "templateName": "Prosty",
    "templateVersion": 2,
    "latestTemplateVersion": 2,
    "userId": "5357699c9d33da5ee72b45ce",
    "email": "admin@neoteric.eu",
    "customerId": "5351090b8fe7f4e7b99d6e67",
    "name": "foo",
    "description": "bar",
    "timestamp": "2014-06-11T12:52:00.189+0200",
    "versions": [
        {
            "version": 1,
            "previousVersion": null,
            "author": "admin@neoteric.eu",
            "timestamp": "2014-06-11T12:46:36.239+0200"
        },
        {
            "version": 2,
            "previousVersion": 1,
            "author": "admin@neoteric.eu",
            "timestamp": "2014-06-11T12:47:25.520+0200"
        },
        {
            "version": 3,
            "previousVersion": 2,
            "author": "admin@neoteric.eu",
            "timestamp": "2014-06-11T12:50:43.481+0200"
        },
        {
            "version": 4,
            "previousVersion": 3,
            "author": "admin@neoteric.eu",
            "timestamp": "2014-06-11T12:52:00.189+0200"
        }
    ],
    "metaFields": [
        {
            "id": "53970e6ee4b07061e6405b9e",
            "fieldName": "Tekst",
            "fieldDescription": "to jest description",
            "fieldTypeId": "5379cc6c94c980bca9923d50",
            "fieldTypeName": "TEXTFIELD",
            "fieldTypeLabel": "Textfield",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "to jest value pola"
        },
        {
            "id": "539973ffe4b080bd3e33d56a",
            "fieldName": "Wybierz z listy",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d53",
            "fieldTypeName": "DROPDOWN",
            "fieldTypeLabel": "Dropdown list",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [
                "aa",
                "asd",
                "vv"
            ],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "asd"
        },
        {
            "id": "53930b07e4b02b37f1347761",
            "fieldName": "Tekst akapitu",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d60",
            "fieldTypeName": "TEXTAREA",
            "fieldTypeLabel": "Textarea",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [
                ""
            ],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "dlugi text kjadkjd akmsdpk jadpkj ndasdkjasd ijiow dndsao kdnaskd naoskd asndaksndla dlkasdndas djaso daso dkjasodj ioawj djasod sad oasdo asdosdj oasdjoasjd osaijd osia disajdoisajdoiasjd iasjd osjdaosdjaosdj"
        },
        {
            "id": "539973ffe4b080bd3e33d56c",
            "fieldName": "Jednokrotny wybór",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d55",
            "fieldTypeName": "CHECKBOX",
            "fieldTypeLabel": "Checkbox",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "true"
        },
        {
            "id": "53930bd7e4b02b37f1347770",
            "fieldName": "Data",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d54",
            "fieldTypeName": "DATE",
            "fieldTypeLabel": "Date",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [
                ""
            ],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "2014-05-26T22:00:00.000Z"
        },
        {
            "id": "53930b07e4b02b37f1347763",
            "fieldName": "E-mail",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d51",
            "fieldTypeName": "EMAIL",
            "fieldTypeLabel": "Email",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [
                ""
            ],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "afafd@dskfjs"
        },
        {
            "id": "539972a0e4b080bd3e33d564",
            "fieldName": "Wielokrotny wybór",
            "fieldDescription": "",
            "fieldTypeId": "5379cc6c94c980bca9923d52",
            "fieldTypeName": "RADIO",
            "fieldTypeLabel": "Radio button",
            "class": "PRIMITIVE",
            "templateField": true,
            "options": [
                "aa",
                "",
                "vv"
            ],
            "validationPattern": null,
            "required": true,
            "composite": [],
            "value": "aa"
        }
    ],
    "version": 4,
    "privileges": [
        "ALL"
    ],
    "sharingInfo": null
};
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


			$scope.docPreviewModal = function(document, version) {
				console.log(document, 'adasdasda', version);
				var modalScope = $scope.$new();
				modalScope.document = document;
				modalScope.version = version;

				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/docPreview.html',
					scope: modalScope,
					windowClass: 'docPreview'
				});
				modalInstance.result.then(function () {
					console.log('sss');
					//$scope.restoreVersion(document, version);
				});
			};



/*			$scope.switchVersion = function(order) {

			};*/


		};


		return ['$scope', '$routeParams', '$location', 'appMessages', 'locale',
		'documentTemplateService', 'documentService', '$modal', 'documentModulePath', CreateDocumentController];

		

	});
}());