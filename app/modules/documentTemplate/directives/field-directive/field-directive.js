(function() {
	'use strict';
	define([], function() {

		var fieldDirective = function($http, $compile) {

			var getTemplateUrl = function(field) {
				var type = field.fieldTypeName;
				var modulePath = './modules/documentTemplate/directives/field-directive/';
				var templateUrl = '';

				switch(type) {
					case 'TEXTFIELD':
						templateUrl = modulePath + 'views/field/textfield.html';
						break;
					case 'EMAIL':
						templateUrl = modulePath + 'views/field/email.html';
						break;
					case 'TEXTAREA':
						templateUrl = modulePath + 'views/field/textarea.html';
						break;
					case 'CHECKBOX':
						templateUrl = modulePath + 'views/field/checkbox.html';
						break;
					case 'DATE':
						templateUrl = modulePath + 'views/field/date.html';
						break;
					case 'DROPDOWN':
						templateUrl = modulePath + 'views/field/dropdown.html';
						break;
					case 'RADIO':
						templateUrl =modulePath +  'views/field/radio.html';
						break;
				}
				return templateUrl;
			};



			var linker = function(scope, element) {
				// GET template content from path
				var templateUrl = getTemplateUrl(scope.field);
				scope.ready = false;

				$http.get(templateUrl).success(function(data) {
					element.html(data);
					$compile(element.contents())(scope);
					scope.ready = true;
				});
			};



			return {
				template: '<div ng-show="ready">{{field}}</div>',
				restrict: 'E',
				scope: {
					field:'=',
					metaFields: '='
				},
				link: linker,
				controller: function($scope, $modal, enums, documentTemplateModulePath){
					$scope.isValidationPattern = function(validationPattern) {
						var patern;
						if (!!validationPattern) {
							patern = new RegExp(validationPattern);
						} else {
							patern = new RegExp('^.*');
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
							$scope.field = editedField;
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

						switch (field.fieldTypes){
							case enums.fieldTypes.DATE:
							case enums.fieldTypes.CHECKBOX:
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
				}
			};
		};

		return ['$http', '$compile', fieldDirective];
	});
}());
