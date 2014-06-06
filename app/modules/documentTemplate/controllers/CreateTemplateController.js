(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, $routeParams, $modal, enums, documentTemplateService, documentTemplateModulePath) {

			// preview form mode
			$scope.previewMode = false;

			// new form
			$scope.form = {};
			$scope.form.name = '';
			$scope.form.description = '';
			$scope.form.metaFields = [];
			$scope.form.icon = documentTemplateService.iconsArray.getModel()[0];

			$scope.disableLeftArrow = true;
			// previewForm - for preview purposes, form will be copied into this
			// otherwise, actual form might get manipulated in preview mode
			$scope.previewForm = {};

			// add new field drop-down:
			$scope.addField = {};

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
					'fieldLabel' : $scope.selectedType.label,
					'fieldClass' : null,
					'composite': [],
					//options are pushed
					'validationPatternNeeded': false,
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
				if(field.fieldTypeName === enums.fieldTypes.RADIO || field.fieldTypeName === enums.fieldTypes.DROPDOWN) {
					return true;
				} else {
					return false;
				}
			};

			$scope.showValidationInput = function (field) {
				if(field.fieldTypeName === enums.fieldTypes.TEXTFIELD) {
					return true;
				} else {
					return false;
				}
			};

			// deletes all the fields
			$scope.reset = function () {
				$scope.form.metaFields.splice(0, $scope.form.metaFields.length);
			};

			$scope.initTemplate = function() {
				documentTemplateService.getFieldTypes().then(function() {
					$scope.addField.types = documentTemplateService.primitiveFieldTypes.getModel();
					$scope.selectedType = $scope.addField.types[0];
				});
console.log('xxx', documentTemplateService.iconsArray.getModel());
				if(angular.isDefined($routeParams.templateId)) {
					$scope.editMode = 1;
					documentTemplateService.getTemplateById($routeParams.templateId).then(function(template) {
						$scope.form = template;
						// _.each responsible for displaying REGEX DIV correctly in edit mode.
						_.each($scope.form.metaFields, function(field) {
							if(field.validationPattern) {
								field.validationPatternNeeded = true;
							} else {
								field.validationPatternNeeded = false;
							}
						});
					}, function() {//reason
						//$exceptionHandler(reason);
					});
				} else {
					$scope.editMode = 0;
				}
			};

			// function used to load chosen version of the template
			$scope.editTemplate = function(template, version) { //FIXME: check if template argument is needed
				documentTemplateService.getTemplateById($routeParams.templateId, version.version).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
				}, function() {	// reason
					// $exceptionHandler(reason);
				});
			};

			// saves a newly created template
			$scope.saveTemplate = function(form) {
				if (angular.isDefined(form.version)) {
					$scope.updateTemplate(form);
					return;
				}
				documentTemplateService.createTemplate(form).then(function() {
					console.log('success');
					$scope.form.name = '';
					$scope.form.description = '';
					$scope.form.metaFields = [];//info ze sie udalo
				}, function() {
					console.log('failed');
				});

			};

			// updates already existing template to newer version
			$scope.updateTemplate = function(form) {
				console.log('update wszedl', form);
				documentTemplateService.updateTemplate(form).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
					console.log('success');
				}, function() {	// reason
					// $exceptionHandler(reason);
				});
			};

			$scope.restoreVersionModal = function(template, version) {
				// argument version - current object in "versions" array of the current template
				var modalScope = $scope.$new();
				modalScope.template = template;
				modalScope.version = version;

				var modalInstance = $modal.open({
					templateUrl: documentTemplateModulePath + 'views/modals/restoreVersionModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
					$scope.restoreVersion(template, version);
				});
			};

			$scope.restoreVersion = function(id, version) {

				documentTemplateService.restoreTemplateVersion($routeParams.templateId, version.version).then(function() {

					$scope.form = documentTemplateService.activeTemplate.getModel();
					//console.log('scope.form po editTemplate', $scope.form);
				}, function() {	// reason
					// $exceptionHandler(reason);
				});

			};

			$scope.switchIcon = function(i) {
				var array = documentTemplateService.iconsArray.getModel();
				
				$scope.disableLeftArrow = false;
				$scope.disableRightArrow = false;
				var n =_.indexOf(array, $scope.form.icon);
				if (n === 0 && i === -1) {
					$scope.disableLeftArrow = true;
					return;
				}
				if (n === array.length-1 && i === 1) {
					$scope.disableRightArrow = true;
					return;
				}
				$scope.form.icon = array[n + i];
				if (n + i === 0) {
					$scope.disableLeftArrow = true;
				}
				if (n + i === array.length-1) {
					$scope.disableRightArrow = true;
				}
			};




		};

		return ['$scope', '$location', '$routeParams', '$modal', 'enums', 'documentTemplateService', 'documentTemplateModulePath', CreateTemplateController];
	});
}());
