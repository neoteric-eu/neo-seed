(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, $routeParams,
		$modal, appMessages, locale, enums, documentTemplateService, documentTemplateModulePath) {
			$scope.dateOptions = { 'starting-day': 1 };

			// preview form mode
			$scope.previewMode = false;

			// new form
			$scope.form = {};
			$scope.form.name = locale.getT('New_template');
			$scope.form.description = '';
			$scope.form.metaFields = [];
			$scope.form.icon = documentTemplateService.iconsArray.getModel()[0];

			$scope.disableLeftArrow = true;
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
					'value' : null
				};
				// put newField into fields array
				$scope.form.metaFields.push(newField);
			};


			$scope.initTemplate = function() {
				$scope.readyToShow = false;

				documentTemplateService.getFieldTypes().then(function() {
					$scope.readyToShow = true;
					$scope.addField.types = documentTemplateService.primitiveFieldTypes.getModel();
					$scope.selectedType = $scope.addField.types[0];
				});

				if(angular.isDefined($routeParams.templateId)) {
					$scope.editMode = 1;
					documentTemplateService.getTemplateById($routeParams.templateId).then(function() {
						$scope.form = documentTemplateService.activeTemplate.getModel();
						// _.each responsible for displaying REGEX DIV correctly in edit mode.
						_.each($scope.form.metaFields, function(field) {
							if(field.validationPattern) {
								field.validationPatternNeeded = true;
							} else {
								field.validationPatternNeeded = false;
							}
						});
					}, function() {
						//$exceptionHandler(reason);
						appMessages.error(locale.getT('Operation_failed'));
					});
				} else {
					$scope.editMode = 0;
				}
			};

			// function used to load chosen version of the template
			$scope.editTemplate = function(template, version) { //FIXME: check if template argument is needed
				documentTemplateService.getTemplateById($routeParams.templateId, version.version).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					// $exceptionHandler(reason);
				});
			};


			/**
			 *	@name saveTemplate
			 *
			 *	@param {Object} from
			 *	@param {Bolean}
			 *
			 */
			$scope.saveTemplate = function(form, changeLocation) {
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

			};

			// updates already existing template to newer version
			$scope.updateTemplate = function(form, changeLocation) {
				documentTemplateService.updateTemplate(form).then(function() {

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


			/**
			 *	@name removeField
			 *
			 *	@param {object} field
			 *	@descrtiption Remove filed from model
			 */
			$scope.removeField = function(field, metaFields) {
				var index = _.indexOf(metaFields, field);
				if ( index > -1 ) {
					metaFields.splice(index, 1);
				}
			};

			/**
			 *	@name editModal
			 *
			 *	@param {object} field
			 *	@descrtiption edit field options in modal
			 */
			$scope.editModal = function(field) {
				var modalScope = $scope.$new();

				modalScope.field = angular.copy(field);

				var modalInstance = $modal.open({
					templateUrl: documentTemplateModulePath + 'views/modals/editField.html',
					scope: modalScope
				});
				modalInstance.result.then(function (editedField) {
					// console.log(editedField);
					// field = editedField;
					return _.extend(field, editedField);

				});
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


			$scope.showAddOptions = function (field) {
				return field.fieldTypeName === enums.fieldTypes.RADIO || field.fieldTypeName === enums.fieldTypes.DROPDOWN;
			};

			$scope.showHelpText = function(field) {
				var result;
				switch (field.fieldTypeName){
					case enums.fieldTypes.DATE:
					case enums.fieldTypes.DROPDOWN:
					case enums.fieldTypes.CHECKBOX:
					case enums.fieldTypes.RADIO:
						result = false;
						break;

					default:
						result = true;
				}

				return result;
			};

			$scope.showValidationInput = function (field) {
				return field.fieldTypeName === enums.fieldTypes.TEXTFIELD;
			};


		};

		return ['$scope', '$location', '$routeParams', '$modal', 'appMessages',
		'locale', 'enums', 'documentTemplateService', 'documentTemplateModulePath',
		CreateTemplateController];
	});
}());
