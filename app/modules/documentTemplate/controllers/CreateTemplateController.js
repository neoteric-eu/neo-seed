(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, $routeParams,
		$modal, system, appMessages, locale, docsEnums, documentTemplateService,
		documentService, documentTemplateModulePath) {

			$scope.dateOptions = { 'starting-day': 1 };

			// preview form mode
			$scope.previewMode = false;

			// display edit icons
			$scope.templateMode = true;

			// new form
			$scope.form = {};
			$scope.form.name = locale.getT('New_template');
			$scope.form.description = '';
			$scope.form.metaFields = [];
			$scope.form.icon = documentTemplateService.iconsArray.getModel()[0];

			$scope.disableLeftArrow = true;
			// add new field drop-down:
			$scope.addField = {};

			/**
			 *	@name fieldFactory
			 *
			 *	@param {bolean} addOptions
			 *	@return {object} with or without array in the options property
			 */
			function fieldFactory(addOptions, selectedType) {
				var newField = {
					'id' : null,
					'fieldName' : selectedType.label,
					'fieldDescription' : selectedType.fieldDescription || '',
					'fieldTypeId' : selectedType.id,
					'fieldTypeName' : selectedType.typeName,
					'fieldLabel' : selectedType.label,
					'fieldClass' : null,
					'composite': [],
					//options are pushed
					'options': null,
					'validationPattern' : null,
					'required' : false,
					'value' : null
				};

				if(addOptions) {
					newField.options = [''];
				}

				if(selectedType.class === 'COMPLEX') {
					newField.composite = selectedType.composite;
				}

				return newField;
			}

			/**
			 *	@name addNewField
			 *
			 *	@param {array} array
			 */
			$scope.addNewField = function(array, selectedType) {
				var addOptions = $scope.showAddOptions(selectedType);
				// put newField into fields array
				array.push(fieldFactory(addOptions, selectedType));
			};



			$scope.initTemplate = function() {
				$scope.readyToShow = false;
				documentTemplateService.getFieldTypes().then(function() {
					$scope.readyToShow = true;
					var primitives = documentTemplateService.primitiveFieldTypes.getModel();
					var complex = documentTemplateService.complexFieldTypes.getModel();
					$scope.addField.types = primitives.concat(complex);
					console.log($scope.addField.types);
					$scope.selectedType = $scope.addField.types[0];
				});

				if(angular.isDefined($routeParams.templateId)) {
					$scope.editMode = 1;
					system.showLoader();
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
					}).finally(function() {
						system.hideLoader();
					});

				} else {
					$scope.editMode = 0;
				}
			};

			// function used to load chosen version of the template
			$scope.editTemplate = function(template, version) { //FIXME: check if template argument is needed
				system.showLoader();
				documentTemplateService.getTemplateById($routeParams.templateId, version.version).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					// $exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
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
				system.showLoader();
				documentTemplateService.createTemplate(form).then(function() {
					if (changeLocation) {
						$location.path('/templates');
					} else {
						$scope.form = documentTemplateService.activeTemplate.getModel();
						$location.path('/template/edit/' + $scope.form.id);
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
				});

			};

			// updates already existing template to newer version
			$scope.updateTemplate = function(form, changeLocation) {
				system.showLoader();
				documentTemplateService.updateTemplate(form).then(function() {

					if (changeLocation) {
						$location.path('/templates');
					} else {
						$scope.form = documentTemplateService.activeTemplate.getModel();
					}

					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
				});
			};

			$scope.restoreVersionModal = function(template, version) {
				// argument version - current object in 'versions' array of the current template
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
				system.showLoader();
				documentTemplateService.restoreTemplateVersion($routeParams.templateId, version.version).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
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

			/**
			 *	@name showAddOptions
			 *
			 *	@param {object} field
			 *	@return {bolean} return true if field type is RADIO or DROPDOWN
			 */
			$scope.showAddOptions = function (field) {
				var result;
				switch (field.fieldTypeName || field.typeName){
					case docsEnums.fieldTypes.RADIO:
					case docsEnums.fieldTypes.DROPDOWN:
						result = true;
						break;

					default:
						result = false;
				}

				return result;
			};

			/**
			 *	@name showHelpText
			 *
			 *	@param {object} field
			 *	@return {bolean} return false if field type is DATE, RADIO, etc.
			 */
			$scope.showHelpText = function(field) {
				var result;
				switch (field.fieldTypeName){
					case docsEnums.fieldTypes.DATE:
					case docsEnums.fieldTypes.DROPDOWN:
					case docsEnums.fieldTypes.CHECKBOX:
					case docsEnums.fieldTypes.RADIO:
					case docsEnums.fieldTypes.ATTACHMENT:
						result = false;
						break;

					default:
						result = true;
				}

				return result;
			};

			$scope.showValidationInput = function (field) {
				return field.fieldTypeName === docsEnums.fieldTypes.TEXTFIELD;
			};





			//TODO: get Documents at init
			$scope.documentsList = documentService.documents.getModel();

			$scope.attachmentSelected = function(field) {
				field.documentSelected = true;
			};

			$scope.reSearch = function(field) {
				field.documentSelected = false;
			};


			$scope.docPreviewModal = function(previewDocument) {
				var modalScope = $scope.$new();
				modalScope.previewDocument = previewDocument;
				$modal.open({
					templateUrl: 'modules/document/views/modals/docPreview.html',
					controller: function($scope) {
						$scope.onlyPreview = true;
					},
					windowClass: 'docPreview',
					scope: modalScope
				});

			};




		};

		return ['$scope', '$location', '$routeParams', '$modal', 'system',
		'appMessages', 'locale', 'docsEnums', 'documentTemplateService',
		'documentService', 'documentTemplateModulePath', CreateTemplateController];
	});
}());
