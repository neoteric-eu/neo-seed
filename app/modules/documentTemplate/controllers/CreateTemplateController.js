(function() {
	'use strict';
	define([], function() {

		var CreateTemplateController = function($scope, $location, $routeParams,
		$modal, system, appMessages, locale, docsEnums, documentTemplateService,
		documentTemplateModulePath) {

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
					$scope.addField.types = documentTemplateService.primitiveFieldTypes.getModel();
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





							/*** new stuff ***/

			// $scope.documentTemplates = documentTemplateService.documentTemplates.getModel();

			$scope.attachmentSelected = function(field) {
				field.documentSelected = true;

			};

			$scope.reSearch = function(field) {
				field.documentSelected = false;
			};


			$scope.docPreviewModal = function(previewDocument, previewVersion) {
				console.log(previewDocument, '!!!!!!!!', previewVersion);
				var modalInstance = $modal.open({
					templateUrl: 'modules/document/views/modals/docPreview.html',
					controller: 'PreviewModalController',
					windowClass: 'docPreview',
					resolve: {
						previewDocument: function(){
							return previewDocument;
						},
						previewVersion: function(){
							return previewVersion;
						}
					}
				});
				modalInstance.result.then(function (previewDocument) {
					$scope.document = previewDocument;
				});

			};

/*
			$scope.documentTemplates = [
			{
				'id': '539eff91e4b04c1fd3d6e42a',
				'templateId': null,
				'templateName': null,
				'templateVersion': null,
				'latestTemplateVersion': null,
				'userId': '53576d399d33da5ee72b45d1',
				'email': 'test@neoteric.eu',
				'customerId': '53576d7c9d33da5ee72b45d2',
				'name': 'Nowy dokument',
				'description': '',
				'timestamp': '2014-06-16T16:30:41.640+0200',
				'versions': [
				{
					'version': 1,
					'previousVersion': null,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:30:41.640+0200'
				}
				],
				'metaFields': [
				{
					'id': '539eff91e4b04c1fd3d6e418',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e419',
					'fieldName': 'Tekst akapitu',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d60',
					'fieldTypeName': 'TEXTAREA',
					'fieldTypeLabel': 'Textarea',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41a',
					'fieldName': 'E-mail',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d51',
					'fieldTypeName': 'EMAIL',
					'fieldTypeLabel': 'Email',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41b',
					'fieldName': 'Wielokrotny wybór',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d52',
					'fieldTypeName': 'RADIO',
					'fieldTypeLabel': 'Radio button',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [
					''
					],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41c',
					'fieldName': 'Wybierz z listy',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d53',
					'fieldTypeName': 'DROPDOWN',
					'fieldTypeLabel': 'Dropdown list',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [
					''
					],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41d',
					'fieldName': 'Data',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d54',
					'fieldTypeName': 'DATE',
					'fieldTypeLabel': 'Date',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41e',
					'fieldName': 'Jednokrotny wybór',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d55',
					'fieldTypeName': 'CHECKBOX',
					'fieldTypeLabel': 'Checkbox',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e41f',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e420',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e421',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e422',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e423',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e424',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e425',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e426',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e427',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e428',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				},
				{
					'id': '539eff91e4b04c1fd3d6e429',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				}
				],
				'version': 1,
				'privileges': [
				'ALL'
				],
				'sharingInfo': null,
				'icon': 'fa-file-text-o'
			},
			{
				'id': '539ed5d6e4b04c1fd3d6e411',
				'templateId': null,
				'templateName': null,
				'templateVersion': null,
				'latestTemplateVersion': null,
				'userId': '53576d399d33da5ee72b45d1',
				'email': 'test@neoteric.eu',
				'customerId': '53576d7c9d33da5ee72b45d2',
				'name': 'v1',
				'description': 'v1',
				'timestamp': '2014-06-17T11:17:30.997+0200',
				'versions': [
				{
					'version': 1,
					'previousVersion': null,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T13:32:38.049+0200'
				},
				{
					'version': 2,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T13:33:29.167+0200'
				},
				{
					'version': 3,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T15:48:33.920+0200'
				},
				{
					'version': 4,
					'previousVersion': 2,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T15:54:39.953+0200'
				},
				{
					'version': 5,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:04:37.524+0200'
				},
				{
					'version': 6,
					'previousVersion': 5,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:04:49.443+0200'
				},
				{
					'version': 7,
					'previousVersion': 1,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:38:00.900+0200'
				},
				{
					'version': 8,
					'previousVersion': 2,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:38:13.557+0200'
				},
				{
					'version': 9,
					'previousVersion': 3,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:47:50.093+0200'
				},
				{
					'version': 10,
					'previousVersion': 4,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T16:47:55.126+0200'
				},
				{
					'version': 11,
					'previousVersion': 9,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-16T17:19:42.165+0200'
				},
				{
					'version': 12,
					'previousVersion': 6,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-17T11:17:30.997+0200'
				}
				],
				'metaFields': [
				{
					'id': '539ed5d6e4b04c1fd3d6e410',
					'fieldName': 'Tekst',
					'fieldDescription': '',
					'fieldTypeId': '5379cc6c94c980bca9923d50',
					'fieldTypeName': 'TEXTFIELD',
					'fieldTypeLabel': 'Textfield',
					'class': 'PRIMITIVE',
					'templateField': false,
					'options': [],
					'validationPattern': null,
					'required': false,
					'composite': [],
					'value': null
				}
				],
				'version': 12,
				'privileges': [
				'ALL'
				],
				'sharingInfo': null,
				'icon': 'fa-file-text-o'
			},
			{
				'id': '53a02329e4b0bd929e42db08',
				'templateId': null,
				'templateName': null,
				'templateVersion': null,
				'latestTemplateVersion': null,
				'userId': '53576d399d33da5ee72b45d1',
				'email': 'test@neoteric.eu',
				'customerId': '53576d7c9d33da5ee72b45d2',
				'name': 'Nowy dokument',
				'description': '',
				'timestamp': '2014-06-17T13:14:49.651+0200',
				'versions': [
				{
					'version': 1,
					'previousVersion': null,
					'author': 'test@neoteric.eu',
					'timestamp': '2014-06-17T13:14:49.629+0200'
				}
				],
				'metaFields': [],
				'version': 1,
				'privileges': [
				'ALL'
				],
				'sharingInfo': null,
				'icon': 'fa-file-text-o'
			}
			];*/




		};

		return ['$scope', '$location', '$routeParams', '$modal', 'system',
		'appMessages', 'locale', 'docsEnums', 'documentTemplateService',
		'documentTemplateModulePath', CreateTemplateController];
	});
}());
