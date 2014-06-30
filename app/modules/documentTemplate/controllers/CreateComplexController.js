(function() {
	'use strict';
	define([], function() {

		var CreateComplexController = function($scope, $location, $routeParams,
		$modal, system, appMessages, locale, docsEnums, documentTemplateService,
		documentTemplateModulePath) {

			$scope.dateOptions = { 'starting-day': 1 };
			$scope.templateMode = true;

			// new form
			$scope.form = {};
			$scope.form.fieldName = locale.getT('New_complex_field');
			$scope.form.fieldDescription = '';
			$scope.form.class = 'COMPLEX';
			$scope.form.composite = [];

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
					'id' : '343243244324jfsdfsd343ff',
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

			$scope.initComplex = function() {	//TODO: no REST to test.
				$scope.readyToShow = false;
				documentTemplateService.getFieldTypes().then(function() {
					$scope.readyToShow = true;
					$scope.addField.types = documentTemplateService.primitiveFieldTypes.getModel();
					$scope.selectedType = $scope.addField.types[0];
				});

				if(angular.isDefined($routeParams.complexId)) {
					$scope.editMode = 1;
					system.showLoader();
					documentTemplateService.getComplexById($routeParams.complexId).then(function() {
						$scope.form = documentTemplateService.activeComplexField.getModel();
						// _.each responsible for displaying REGEX DIV correctly in edit mode.
/*						_.each($scope.form.metaFields, function(field) {
							if(field.validationPattern) {
								field.validationPatternNeeded = true;
							} else {
								field.validationPatternNeeded = false;
							}
						});*/
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
/*			$scope.editTemplate = function(template, version) { //FIXME: check if template argument is needed
				system.showLoader();
				documentTemplateService.getTemplateById($routeParams.templateId, version.version).then(function() {
					$scope.form = documentTemplateService.activeTemplate.getModel();
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					// $exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
				});
			};*/


			/**
			 *	@name saveTemplate
			 *
			 *	@param {Object} from
			 *	@param {Bolean}
			 *
			 */
			$scope.saveComplexField = function(form) {

				system.showLoader();
				documentTemplateService.createComplexField(form).then(function() {
					$location.path('/complex/');
					appMessages.success(locale.getT('Operation_succeeded'));
				}, function() {
					appMessages.error(locale.getT('Operation_failed'));
					//$exceptionHandler(reason);
				}).finally(function() {
					system.hideLoader();
				});

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
			 *	@param {undefined} metaFields - undefined in complex field creation mode
			 *	@param {array} composite

			 *	@descrtiption Remove filed from model
			 */
			$scope.removeField = function(field, metaFields, composite) {
				console.log('sdasd', field, composite);
				var index = _.indexOf(composite, field);
				if ( index > -1 ) {
					composite.splice(index, 1);
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


		};

		return ['$scope', '$location', '$routeParams', '$modal', 'system',
		'appMessages', 'locale', 'docsEnums', 'documentTemplateService',
		'documentTemplateModulePath', CreateComplexController];
	});
}());
