
(function() {
	'use strict';
	define([],function() {

		var documentTemplateService = function($q, documentTemplateResource, fieldTypesResource) {
			var self = this;

			/* jshint  quotmark: false */

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
			this.activeTemplate = new ModelConstructor();
			this.documentTemplates = new ModelConstructor();
			this.primitiveFieldTypes = new ModelConstructor();
			this.complexFieldTypes = new ModelConstructor();

			this.getFieldTypes = function() {
				var deferred = $q.defer();
				fieldTypesResource.getFieldTypes(
					function(data) {
						var primitive = [];
						var complex = [];
						//field types primitive vs complex
						_.each(data.data, function(fieldType) {
							if(fieldType.class === "PRIMITIVE") {
								primitive.push(fieldType);
							} else if(fieldType.class === "COMPLEX") {
								complex.push(fieldType);
							}

						});
						self.primitiveFieldTypes.setModel(primitive);
						self.complexFieldTypes.setModel(complex);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					});

				return deferred.promise;
			};

			this.createFieldType = function(fieldType) {
				var deferred = $q.defer();
				fieldTypesResource.createFieldType(fieldType, function(data) {
					self.fieldTypes.pushDataToModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.getTemplates = function() {
				var deferred = $q.defer();
				documentTemplateResource.getTemplates(
					function(data) {
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

			this.createTemplate = function(template) { // zamienić argument na templateId. caly obiekt nie jest potrzbny
				var deferred = $q.defer();
				documentTemplateResource.createTemplate(template, function(data) {
					self.documentTemplates.pushDataToModel(data);
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




		};


		return ['$q', 'documentTemplateResource', 'fieldTypesResource', documentTemplateService];

	});
}());
