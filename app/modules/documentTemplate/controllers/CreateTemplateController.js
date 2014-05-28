(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, documentTemplateService) {

			// preview form mode
			$scope.previewMode = false;

			// new form
			$scope.form = {};
			$scope.form.name = '';
			$scope.form.description = '';
			$scope.form.metaFields = [];

			// previewForm - for preview purposes, form will be copied into this
			// otherwise, actual form might get manipulated in preview mode
			$scope.previewForm = {};

			// add new field drop-down:
			$scope.addField = {};
			$scope.addField.types = documentTemplateService.fields;
			$scope.selectedType = $scope.addField.types[0];

			// accordion settings
			$scope.accordion = {};
			$scope.accordion.oneAtATime = true;

			// create new field button click
			$scope.addNewField = function() {

				var newField = {
					'id' : null,
					'fieldName' : $scope.fieldName,
					'fieldDescription' : $scope.fieldDescription || '',
					'fieldTypeId' : $scope.selectedType.id,	//to do
					'fieldTypeName' : $scope.selectedType.typeName,
					'fieldClass' : null,
					'composite': [],
					//options are pushed 
					'validationPattern' : null,
					'required' : true,
					'value' : ''
				};

				// put newField into fields array
				$scope.form.metaFields.push(newField);
				$scope.fieldName = '';
			};

			// deletes particular field on button click
/*			$scope.deleteField = function (field_id){
				for(var i = 0; i < $scope.form.metaFields.length; i++){
					if($scope.form.metaFields[i].field_id === field_id){
						$scope.form.metaFields.splice(i, 1);
						break;
					}
				}
			};*/

			$scope.deleteField = function(form, index) {
				form.metaFields.splice(index, 1);
			};

			// add new option to the field
			$scope.addOption = function (field) {
				if(!field.options) {
					field.options = [];
				}
				var newOption = '';
				// put new option into field_options array
				field.options.push(newOption);
			};

			// delete particular option
			$scope.deleteOption = function (field, index) {
				field.options.splice(index, 1);
			};

			// preview form
			$scope.previewOn = function(){
				if($scope.form.metaFields === null || $scope.form.metaFields.length === 0) {
					// var title = 'Error';
					// var msg = 'No fields added yet, please add fields to the form before preview.';
					// var btns = [{result:'ok', label: 'OK', cssClass: 'btn-primary'}];

					// $dialog.messageBox(title, msg, btns).open();
				}
				else {
					$scope.previewMode = !$scope.previewMode;
					$scope.form.submitted = false;
					angular.copy($scope.form, $scope.previewForm);
				}
			};

			// hide preview form, go back to create mode
			$scope.previewOff = function() {
				$scope.previewMode = !$scope.previewMode;
				$scope.form.submitted = false;
			};

			// decides whether field options block will be shown (true for dropdown and radio fields)
			$scope.showAddOptions = function (field) {
				if(field.fieldTypeName === 'Radio Buttons' || field.fieldTypeName === 'Dropdown List') {
					return true;
				} else {
					return false;
				}
			};

			// deletes all the fields
			$scope.reset = function () {
				$scope.form.metaFields.splice(0, $scope.form.metaFields.length);
				$scope.addField.lastAddedID = 0;
			};

			$scope.initTemplate = function() {
				if($location.path() === '/template/create') {
					$scope.editMode = 0;
				}else{
					$scope.editMode = 1;
				}
				console.log($scope.editMode);
			};






		};

		return ['$scope', '$location', 'documentTemplateService', CreateTemplateController];
	});
}());
