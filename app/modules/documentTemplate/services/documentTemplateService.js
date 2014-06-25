
(function() {
	'use strict';
	define([],function() {

		var documentTemplateService = function($q, docsEnums, locale, documentTemplateResource, fieldTypesResource) {
			var self = this;

			function ModelConstructor()  {
				var model = [];
				return {
					getModel:  function() {
						return model;
					},
					pushDataToModel: function(data) {
						model.push(data);
					},
					setModel: function(data) {
						model = data;
					},
					removeModel: function(data) {
						var index = _.indexOf(model, data);
						if ( index > -1 ) {
							model.splice(index, 1);
						}
					}
				};
			}

			this.activeComplexField = new ModelConstructor();
			this.activeTemplate = new ModelConstructor();
			this.documentTemplates = new ModelConstructor();
			this.primitiveFieldTypes = new ModelConstructor();
			this.complexFieldTypes = new ModelConstructor();
			this.activeComplexField = new ModelConstructor();

			var iconsArray = ['fa-file-text-o', 'fa-bars', 'fa-exclamation-circle', 'fa-key', 'fa-info', 'fa-legal', 'fa-phone', 'fa-pencil'];
			this.iconsArray = new ModelConstructor();
			self.iconsArray.setModel(iconsArray);

/*			var attachmentType = {
				'typeName': 'ATTACHMENT',
				'label': 'Attachment',
				'fieldId': null,
				'fieldName': '',
				'fieldDescription': '',
				'customerId': null,
				'global': true,
				'class': 'PRIMITIVE',
				'composite': [],
				'options': [],
				'validationPattern': null,
				'required': null
			};*/


			this.getFieldTypes = function() {
				var deferred = $q.defer();

				fieldTypesResource.getFieldTypes(
					function(data) {
						var primitive = [];
						var complex = [];
						//field types primitive vs complex
						_.each(data.data, function(fieldType) {
							if(fieldType.class === docsEnums.fieldTypes.PRIMITIVE) {
								fieldType.classLabel = locale.getT('PRIMITIVE');
								primitive.push(fieldType);
							} else if(fieldType.class === docsEnums.fieldTypes.COMPLEX) {
								fieldType.classLabel = locale.getT('COMPLEX');
								complex.push(fieldType);
							}

						});
						// Translate label names
						primitive = self.translateFieldsType(primitive);
						self.primitiveFieldTypes.setModel(primitive);
/*
						//HARDCODE
						self.primitiveFieldTypes.pushDataToModel(attachmentType);

*/						self.complexFieldTypes.setModel(complex);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					});

				return deferred.promise;
			};

			/**
			 *	@name translateFieldsType
			 *
			 *	@param {array} fieldTypes
			 *	@return {array} fieldTypes field types with locale labels
			 *	@description Translate label of each fieldTypes
			 */
			this.translateFieldsType = function(fieldTypes) {
				_.each(fieldTypes, function(fieldType) {
					fieldType.label = locale.getT(fieldType.typeName);
				});

				return fieldTypes;
			};

	/*-----	SERVICE NEVER USED - creating fieldTypes disallowed at this stage  ----*/
	/*		this.createFieldType = function(fieldType) {
				var deferred = $q.defer();

				fieldTypesResource.createFieldType(fieldType, function(data) {
					self.fieldTypes.pushDataToModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};		*/

			this.getTemplates = function() {
				var deferred = $q.defer();

				documentTemplateResource.getTemplates(function(data) {
					self.documentTemplates.setModel(data.data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.getTemplateById = function(id, version) {
				var deferred = $q.defer();

				documentTemplateResource.getTemplateById({templateId: id, version: version}, function(data) {
					self.activeTemplate.setModel(data);
					deferred.resolve(data);
				},function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			
			this.getComplexById = function(id) {
				var deferred = $q.defer();

				fieldTypesResource.getComplexById({complexId: id}, function(data) {
					self.activeComplexField.setModel(data);
					deferred.resolve(data);
				},function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.createTemplate = function(template) {
				var deferred = $q.defer();

				documentTemplateResource.createTemplate(template, function(data) {
					self.documentTemplates.pushDataToModel(data);
					self.activeTemplate.setModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.updateTemplate = function(template) {
				var deferred = $q.defer();

				documentTemplateResource.updateTemplate({templateId: template.id}, template, function (data) {
					self.activeTemplate.setModel(data);
					deferred.resolve(data);
				}, function(reason){
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.removeTemplate = function(template) {
				var deferred = $q.defer();

				documentTemplateResource.removeTemplate({templateId: template.id}, function(data) {
					self.documentTemplates.removeModel(template);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.restoreTemplateVersion = function(id, version) {
				var deferred = $q.defer();

				documentTemplateResource.updateTemplate({templateId: id, version: version}, {}, function(data) {
					self.activeTemplate.setModel(data);
					deferred.resolve(data);
				},function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.createComplexField = function(complex) {
				var deferred = $q.defer();

				fieldTypesResource.createFieldType(complex, function(data) {
					self.complexFieldTypes.pushDataToModel(data);
					//self.activeComplexField.setModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.removeComplexField = function(complex) {
				var deferred = $q.defer();

				fieldTypesResource.removeComplexField({complexId: complex.id}, function(data) {
					self.complexFieldTypes.removeModel(complex);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};



		};
		return ['$q', 'docsEnums', 'locale', 'documentTemplateResource', 'fieldTypesResource', documentTemplateService];
	});
}());
