/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams, $location,
			appMessages, locale, documentTemplateService, documentService) {
			/* jshint  quotmark:false, unused:false */
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
				"id": "53970ec4e4b07061e6405ba1",
				"templateId": "53970e6ee4b07061e6405b9f",
				"templateName": "Prosty",
				"templateVersion": 1,
				"latestTemplateVersion": 1,
				"userId": "5357699c9d33da5ee72b45ce",
				"email": "admin@neoteric.eu",
				"customerId": "5351090b8fe7f4e7b99d6e67",
				"name": "Zlecenie serwisowe",
				"description": "Lorem ipsum dolor sit amet senin",
				"timestamp": "2014-06-10T15:57:24.431",
				"versions": [
				{
					"version": 1,
					"previousVersion": null,
					"author": "admin@neoteric.eu",
					"timestamp": "2014-06-10T15:57:24.431"
				}
				],
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
				},
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


			var mockedCreateDocument = {
				"templateId":"53970e6ee4b07061e6405b9f",
				"name":"foo",
				"description":"bar",
				"metaFields": [{
					"id": "53970e6ee4b07061e6405b9e",
					"fieldName": "Tekst",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [""],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				}]
			};




			$scope.init = function() {

				var templateId = $routeParams.templateId;
				var documentId = $routeParams.documentId;

				if (angular.isDefined(templateId)) {
					$scope.renderDocumentFromTemplate(templateId);
					return;
				} else if (angular.isDefined(documentId)) {
					$scope.renderDocumentbyId(documentId);
					return;
				}
			};


			/**
			 *	@name renderDocumentFromTemplate
			 *
			 *	@param {String} templateId
			 *	@description Render new document from template
			 */
			$scope.renderDocumentFromTemplate = function(templateId) {
				$scope.document = {};
				$scope.readyToShow = false;
				$scope.editMode = false;

				documentTemplateService.getTemplateById(templateId).then(function(data) {
					$scope.documentTemplate = data;
					$scope.document.icon = data.icon;
					$scope.document.name = data.name;
					$scope.document.description = data.description;

					$scope.document.templateId = data.id;
					$scope.document.metaFields = data.metaFields;

				}, function(reason) {
					appMessages.error(locale.getT('template_was_not_loaded_please_refresh_browser'));

				}).finally(function() {
					$scope.readyToShow = true;

				});

			};

			/**
			 *	@name renderDocumentbyId
			 *
			 *	@param {String} documentId
			 *	@description Render new document from template
			 */
			$scope.renderDocumentbyId = function(documentId) {
				$scope.document = {};

				$scope.readyToShow = false;
				$scope.editMode = false;

				documentService.getDocumentById(documentId).then(function(data) {
					$scope.editMode = true;
					$scope.document = documentService.activeDocument.getModel();

				}, function(reason) {
					appMessages.error(locale.getT('Operation_failed'));

				}).finally(function() {
					$scope.readyToShow = true;

				});
			};



			// $scope.documentTemplate = mockedTemplate;
			// $scope.mockedDocument = mockedDocument;
			// $scope.mockedCreateDocument = mockedCreateDocument;
			// $scope.document = mockedDocument;



			$scope.dateFormat = 'dd-MM-yyyy';
			$scope.templateMode = false;





			/**
			 *	@name isValidationPattern
			 *
			 *	@param {String} validationPattern
			 *	@return {RegEx} Regular expression
			 *
			 *	@descrtiption
			 *	Return RegEx with validationPattern or any character
			 */
			$scope.isValidationPattern = function(validationPattern) {
				var	patern = new RegExp('^.*');

				if (!!validationPattern) {
					patern = new RegExp(validationPattern);
				}

				return patern;
			};




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
						$scope.initEditDocument();
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
