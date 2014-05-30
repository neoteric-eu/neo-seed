/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams) {
			/* jshint  quotmark: false */
			var mockedTemplate = {
				"id": "53873466e4b05d88ac708a9e",
				"name": "Dane kontaktowe",
				"description": "a",
				"timestamp": "2014-05-29T15:21:42.085+0200",
				"metaFields": [
				{
					"id": "53873466e4b05d88ac708a9b",
					"fieldName": "Osoba kontaktowa",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "Textfield",
					"class": "PRIMITIVE",
					"options": [],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "53873466e4b05d88ac708a9c",
					"fieldName": "email",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d51",
					"fieldTypeName": "Email",
					"class": "PRIMITIVE",
					"options": [],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "53873466e4b05d88ac708a9d",
					"fieldName": "nr tel",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "Textfield",
					"class": "PRIMITIVE",
					"options": [],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				}
				],
				"userId": "5357699c9d33da5ee72b45ce",
				"customerId": "5351090b8fe7f4e7b99d6e67",
				"versions": [
				{
					"version": 1,
					"previousVersion": null,
					"author": "admin@neoteric.eu",
					"timestamp": "2014-05-29T15:21:42.085+0200"
				}
				],
				"version": 1
			};


			$scope.initDocument = function() {

				if (angular.isDefined($routeParams.documentId)) {
					$scope.editMode = 1;
				} else {
					$scope.editMode = 0;
				}

			};

			$scope.documentTemplate = mockedTemplate;


		};

		return ['$scope', '$routeParams', CreateDocumentController];
	});
}());
