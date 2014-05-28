
(function() {
	'use strict';
	define([],function() {

		var documentTemplateService = function($q, documentTemplateResource, fieldTypesResource) {
			var self = this;

			/* jshint  quotmark: false */



				this.fields = [
					{
						name : 'textfield',
						typeName : 'Textfield',
						id : '5379cc6c94c980bca9923d50'
					},
					{
						name : 'email',
						typeName : 'E-mail',
						id : '5379cc6c94c980bca9923d51'
					},
					{
						name : 'radio',
						typeName : 'Radio Buttons',
						id : '5379cc6c94c980bca9923d52'
					},
					{
						name : 'dropdown',
						typeName : 'Dropdown List',
						id : '5379cc6c94c980bca9923d53'
					},
					{
						name : 'date',
						typeName : 'Date',
						id : '5379cc6c94c980bca9923d54'
					},
					{
						name : 'checkbox',
						typeName : 'Checkbox',
						id : '5379cc6c94c980bca9923d55'
					}
				];


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

			this.documentTemplates = new ModelConstructor();
			this.fieldTypes = new ModelConstructor();

			this.getFieldTypes = function() {
				var deferred = $q.defer();
				fieldTypesResource.getFieldTypes(
					function(data) {
						self.fieldTypes.setModel(data.data);
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

			this.getTemplateById = function(id) {
				var deferred = $q.defer();
				documentTemplateResource.getTemplateById({templateId: id}, function(data) {
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
				documentTemplateResource.updateTemplate({templateId: template.id}, function (data) {
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

		};


		return ['$q', 'documentTemplateResource', 'fieldTypesResource', documentTemplateService];

	});
}());
