/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var CreateDocumentController = function ($scope, $routeParams) {
			/* jshint  quotmark: false */
			var mockedTemplate = {
				"id": "538868e2e4b09ae0edad108b",
				"name": "Dane osobowe",
				"description": "Lorem",
				"timestamp": "2014-05-30T13:17:54.299+0200",
				"metaFields": [
				{
					"id": "538868e2e4b09ae0edad1085",
					"fieldName": "Osoba kontaktowa",
					"fieldDescription": "Lorem ipsum dolor sit amet senin! O to sło",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": "^[0-9]+$",
					"required": true,
					"composite": [],
					"value": null
				},

				{
					"id": "538868e2e4b09ae0edad1085",
					"fieldName": "Osoba kontaktowa",
					"fieldDescription": "Hello world",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": "^[0-9]+$",
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1085",
					"fieldName": "Osoba kontaktowa",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": "",
					"required": true,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1085",
					"fieldName": "Osoba kontaktowa",
					"fieldDescription": "Hello world",
					"fieldTypeId": "5379cc6c94c980bca9923d50",
					"fieldTypeName": "TEXTFIELD",
					"fieldTypeLabel": "Textfield",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": "",
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1086",
					"fieldName": "Email",
					"fieldDescription": "Lorem ip[sum dolor sit amet",
					"fieldTypeId": "5379cc6c94c980bca9923d51",
					"fieldTypeName": "EMAIL",
					"fieldTypeLabel": "Email",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
					"required": true,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1087",
					"fieldName": "Płeć",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d52",
					"fieldTypeName": "RADIO",
					"fieldTypeLabel": "Radio button",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1088",
					"fieldName": "dropdown",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d53",
					"fieldTypeName": "DROPDOWN",
					"fieldTypeLabel": "Dropdown list",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": null,
					"required": false,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad1089",
					"fieldName": "Date",
					"fieldDescription": "",
					"fieldTypeId": "5379cc6c94c980bca9923d54",
					"fieldTypeName": "DATE",
					"fieldTypeLabel": "Date",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": null,
					"required": true,
					"composite": [],
					"value": null
				},
				{
					"id": "538868e2e4b09ae0edad108a",
					"fieldName": "Regulamin",
					"fieldDescription": "Czy oddasz nerke?",
					"fieldTypeId": "5379cc6c94c980bca9923d55",
					"fieldTypeName": "CHECKBOX",
					"fieldTypeLabel": "Checkbox",
					"class": "PRIMITIVE",
					"templateField": true,
					"options": [],
					"validationPattern": null,
					"required": true,
					"composite": [],
					"value": null
				},



                {
                    "id": "538873afe4b09ae0edad108d",
                    "fieldName": "Miejsce spotkania",
                    "fieldDescription": "Hola hola żołnierzyku",
                    "fieldTypeId": "5379cc6c94c980bca9923d52",
                    "fieldTypeName": "RADIO",
                    "fieldTypeLabel": "Radio button",
                    "class": "PRIMITIVE",
                    "templateField": true,
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "validationPattern": null,
                    "required": true,
                    "composite": [],
                    "value": "3"
                },
                {
                    "id": "538873afe4b09ae0edad108e",
                    "fieldName": "123123",
                    "fieldDescription": "",
                    "fieldTypeId": "5379cc6c94c980bca9923d53",
                    "fieldTypeName": "DROPDOWN",
                    "fieldTypeLabel": "Dropdown list",
                    "class": "PRIMITIVE",
                    "templateField": true,
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6"
                    ],
                    "validationPattern": null,
                    "required": true,
                    "composite": [],
                    "value": "3"
                }

				],
				"userId": "5357699c9d33da5ee72b45ce",
				"customerId": "5351090b8fe7f4e7b99d6e67",
				"versions": [
				{
					"version": 1,
					"previousVersion": null,
					"author": "admin@neoteric.eu",
					"timestamp": "2014-05-30T13:17:54.299+0200"
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
