(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, $routeParams, $modal, locale, enums, documentTemplateService, documentTemplateModulePath) {

			// preview form mode
			$scope.previewMode = false;

			// new form
			$scope.form = {};
			$scope.form.name = locale.getT('New_template');
			$scope.form.description = '';
			$scope.form.metaFields = [];

			// add new field drop-down:
			$scope.addField = {};


			// create new field button click
			$scope.addNewField = function() {

				var newField = {
					'id' : null,
					'fieldName' : $scope.selectedType.label,
					'fieldDescription' : $scope.fieldDescription || '',
					'fieldTypeId' : $scope.selectedType.id,
					'fieldTypeName' : $scope.selectedType.typeName,
					'fieldLabel' : $scope.selectedType.label,
					'fieldClass' : null,
					'composite': [],
					//options are pushed
					'options': [''],
					'validationPattern' : null,
					'required' : false,
					'value' : ''
				};
				// put newField into fields array
				$scope.form.metaFields.push(newField);
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

			// $scope.deleteField = function(form, index) {
			// 	form.metaFields.splice(index, 1);
			// };


			$scope.initTemplate = function() {
				documentTemplateService.getFieldTypes().then(function() {
					$scope.addField.types = documentTemplateService.primitiveFieldTypes.getModel();
					$scope.selectedType = $scope.addField.types[0];
				});

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

				}, function() {
					// $exceptionHandler(reason);
				});

			};

			// updates already existing template to newer version
			$scope.updateTemplate = function(form) {
				documentTemplateService.updateTemplate(form).then(function() {
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


		};

		return ['$scope', '$location', '$routeParams', '$modal', 'locale', 'enums', 'documentTemplateService', 'documentTemplateModulePath', CreateTemplateController];
	});
}());
