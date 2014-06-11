/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams, documentTemplateService) {
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




			$scope.initDocument = function() {

				$scope.document = {};


				// create document by template
				var templateId = $routeParams.templateId;
				if(angular.isDefined(templateId)) {
					$scope.loadingMetafilds = true;
					documentTemplateService.getTemplateById(templateId).then(function(data) {
						$scope.loadingMetafilds = false;

						$scope.documentTemplate = data;

						$scope.document.icon = data.icon;
						$scope.document.name = data.name;
						$scope.document.description = data.description;

						$scope.document.templateId = data.id;
						$scope.document.metaFields = data.metaFields;

					});

				// Create document by empty template
				}else{

				}


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

/*			$scope.saveDocument = function(document, changeLocation) {
				if (angular.isDefined(form.version)) {
					$scope.updateTemplate(form, changeLocation);
					return;
				}

				documentTemplateService.createTemplate(form).then(function() {
					console.log(changeLocation);
					if (changeLocation) {
						$location.path('/template/template-list');
					} else {
						$scope.form = documentTemplateService.activeTemplate.getModel();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				});

			};*/


		};

		return ['$scope', '$routeParams', 'documentTemplateService', CreateDocumentController];
	});
}());
